import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="bg-background min-h-screen">
      <ScrollProgress />
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Thoughts, insights, and experiences from my journey in software development and technology.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <BlogGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
