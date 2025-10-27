import { motion } from "framer-motion";
import { ArrowDown, Hand, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export const Hero = () => {
  const description = "Hi, I specialize in transforming your ideas into functional and beautiful web applications. High performance, pixel-perfect web applications, let's discuss your next project.";
  const typedText = useTypingEffect(description, 30);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-1.5 md:px-6 overflow-hidden" aria-label="Hero section">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full will-change-transform"
          style={{
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(34, 197, 94, 0.2)) border-box",
            border: "2px solid transparent",
            WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full will-change-transform"
          style={{
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(34, 197, 94, 0.2)) border-box",
            border: "2px solid transparent",
            WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Stars */}
        <motion.div
          className="absolute top-32 left-1/4 text-blue-400/40 will-change-transform"
          animate={{ 
            rotate: 360,
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l3.708 8.292L24 12l-8.292 3.708L12 24l-3.708-8.292L0 12l8.292-3.708z" />
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-1/3 text-green-500/40 will-change-transform"
          animate={{ 
            rotate: -360,
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l3.708 8.292L24 12l-8.292 3.708L12 24l-3.708-8.292L0 12l8.292-3.708z" />
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="inline-flex items-center gap-2 glass-card backdrop-blur-lg rounded-full px-5 py-2.5 shadow-lg">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Open to Exciting Opportunities</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
              Karan Gholap
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto min-h-[4rem]"
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-background/50 text-foreground hover:bg-muted hover:text-foreground group"
              asChild
            >
              <a href="#projects" aria-label="Explore my work and projects">
                Explore My Work
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
              </a>
            </Button>
            
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
              asChild
            >
              <a href="#contact" aria-label="Connect with me">
                <Hand className="mr-2" size={20} />
                Let's Connect
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border bg-background/50 text-foreground hover:bg-muted hover:text-foreground group"
              asChild
            >
              <a 
                href="https://drive.google.com/uc?export=download&id=1QUrYOcDSl6qWGJ1zmvJdA6t2lRe6a-MG"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/karangholap154"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Karan's GitHub profile"
              className="p-3 bg-card/50 backdrop-blur-lg border border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
            </a>
            <a
              href="https://linkedin.com/in/karangholap"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Karan's LinkedIn profile"
              className="p-3 bg-card/50 backdrop-blur-lg border border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
            </a>
            <a
              href="mailto:karangholap.work@gmail.com"
              aria-label="Send an email to Karan"
              className="p-3 bg-card/50 backdrop-blur-lg border border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
