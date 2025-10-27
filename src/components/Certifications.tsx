import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  "Programming Foundations with Python",
  "JavaScript Essentials",
  "React.js",
  "Node.js",
  "Postman API Student Expert",
  "MERN Stack Web Developer (NxtWave)",
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-1.5 md:px-6 bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Certificates & Courses
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300 group flex items-center gap-3"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Award className="text-primary" size={20} />
                </div>
                <p className="text-foreground font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
