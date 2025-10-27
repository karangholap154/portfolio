import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Download, MapPin, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Earth3D = lazy(() => import("./Earth3D").then(module => ({ default: module.Earth3D })));

export const About = () => {
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("karangholap.work@gmail.com");
    toast({
      title: "Email copied!",
      description: "Email address has been copied to clipboard.",
    });
  };

  return (
    <section id="about" className="py-20 px-1.5 md:px-6" aria-label="About section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Time Zone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl glass-card backdrop-blur-md p-8 shadow-xl"
            >
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-foreground">Time Zone</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm currently based in India and available for remote opportunities across different time zones.
                </p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <p className="text-muted-foreground">
                    Mumbai, India (UTC +5:30)
                  </p>
                </div>
                
                {/* Globe */}
                <div className="flex justify-center pt-4">
                  <div className="w-full max-w-sm">
                    <Suspense fallback={
                      <div className="w-full h-[400px] flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                      </div>
                    }>
                      <Earth3D />
                    </Suspense>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Web Developer with a strong foundation in modern web technologies. 
                I recently completed my Bachelor's in Computer Engineering from the University of Mumbai, and I specialize 
                in building responsive, user-friendly applications using React.js, Node.js, and various database systems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in creating full-stack solutions ranging from healthcare booking systems 
                to e-commerce platforms, I focus on writing clean, maintainable code and delivering exceptional 
                user experiences. I'm constantly exploring new technologies and best practices to stay at the 
                forefront of web development.
              </p>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
                asChild
              >
                <a 
                  href="https://drive.google.com/uc?export=download&id=1QUrYOcDSl6qWGJ1zmvJdA6t2lRe6a-MG"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Karan Gholap's resume"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </a>
              </Button>

              {/* Call to Action Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 rounded-2xl glass-card backdrop-blur-md bg-gradient-to-br from-primary/90 to-primary p-8 text-center shadow-xl"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
                  Do you want to start a project together?
                </h3>
                <Button
                  onClick={handleCopyEmail}
                  size="lg"
                  className="bg-background hover:bg-background/90 text-foreground border border-border"
                  aria-label="Copy email address to clipboard"
                >
                  <Copy className="mr-2" size={20} />
                  Copy Email Address
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
