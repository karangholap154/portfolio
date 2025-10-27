import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import { BlogPost } from "./BlogGrid";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard = ({ post, index }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Extract plain text from HTML description
  const getPlainText = (html: string) => {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
  };

  const excerpt = getPlainText(post.description).slice(0, 150) + "...";

  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card overflow-hidden card-hover block"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-muted">
        {post.thumbnail ? (
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
            <span className="text-6xl">📝</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date and External Link Icon */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={16} />
            <span>{formatDate(post.pubDate)}</span>
          </div>
          <ExternalLink 
            size={18} 
            className="text-muted-foreground group-hover:text-primary transition-colors" 
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.categories.slice(0, 3).map((category, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
};
