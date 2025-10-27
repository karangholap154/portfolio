import { BlogPost } from "@/components/blog/BlogGrid";

const MEDIUM_USERNAME = "karan_gholap";
const RSS_TO_JSON_API = "https://api.rss2json.com/v1/api.json";
const CACHE_KEY = "medium_posts_cache";
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export const fetchMediumPosts = async (): Promise<BlogPost[]> => {
  // Check cache first
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const isExpired = Date.now() - timestamp > CACHE_DURATION;
      
      if (!isExpired) {
        return data;
      }
    }
  } catch (error) {
    console.warn("Cache read failed:", error);
  }

  // Fetch from API
  try {
    const rssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
    
    const response = await fetch(
      `${RSS_TO_JSON_API}?rss_url=${encodeURIComponent(rssUrl)}`,
      { signal: controller.signal }
    );
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    const data = await response.json();

    if (data.status !== "ok") {
      throw new Error(data.message || "Failed to parse RSS feed");
    }

    // Transform the RSS feed items to our BlogPost format
    const posts: BlogPost[] = data.items.map((item: any) => {
      // Extract thumbnail from content or use default
      let thumbnail = "";
      if (item.thumbnail) {
        thumbnail = item.thumbnail;
      } else if (item.content) {
        const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch) {
          thumbnail = imgMatch[1];
        }
      }

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        description: item.description || item.content,
        thumbnail,
        categories: item.categories || [],
      };
    });

    // Cache the results
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: posts,
        timestamp: Date.now()
      }));
    } catch (error) {
      console.warn("Cache write failed:", error);
    }

    return posts;
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    throw error;
  }
};
