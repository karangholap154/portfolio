import { motion } from "framer-motion";
import { Github, Linkedin, Mail, UserCircle, Twitter, Code, Palette, Rocket, BookOpen, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socialLinks = [
  { icon: Github, href: "https://github.com/karangholap154", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/karangholap", label: "LinkedIn" },
  { icon: UserCircle, href: "https://peerlist.io/karangholap", label: "Peerlist" },
  { icon: Twitter, href: "https://x.com/karangholap_", label: "X (Twitter)" },
  { icon: Code, href: "https://leetcode.com/u/karangholap/", label: "LeetCode" },
  { icon: Palette, href: "https://www.behance.net/karangholap", label: "Behance" },
  { icon: Rocket, href: "https://www.producthunt.com/@karangholap", label: "Product Hunt" },
  { icon: BookOpen, href: "https://medium.com/@karan_gholap", label: "Medium" },
  { icon: Hash, href: "https://hashnode.com/@karangholap", label: "Hashnode" },
  { icon: Mail, href: "mailto:karangholap.work@gmail.com", label: "Email" },
];

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);

    emailjs
      .sendForm('service_d37iqii', 'template_jrfmiug', formRef.current, {
        publicKey: 'yFtqoPVXmbB1LuaXr',
      })
      .then(
        () => {
          toast({
            title: "Message sent successfully! ✉️",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          formRef.current?.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          toast({
            title: "Failed to send message",
            description: "Please try again or contact me directly via email.",
            variant: "destructive",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-1.5 md:px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-background border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-background border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <Textarea
                  name="project"
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="bg-background border-border focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Connect With Me
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects, 
                creative ideas, or opportunities to be part of your vision.
              </p>
              
              <TooltipProvider>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <Tooltip key={social.label}>
                      <TooltipTrigger asChild>
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                        >
                          <social.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{social.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
