import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-1.5 md:px-6 border-t border-border relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-muted-foreground text-center text-sm md:text-base">
              © 2025 Karan Gholap
              <span className="block md:inline"> | Based in Maharashtra, India</span>
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              <ArrowUp size={20} />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Gradient line separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  );
};
