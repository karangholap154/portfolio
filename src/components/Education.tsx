import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor's in Computer Engineering",
    institution: "University of Mumbai",
    location: "Mumbai, Maharashtra",
    period: "2022 – 2025 (Completed)",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Rasiklal M. Dhariwal Institute of Technology",
    location: "Pune, Maharashtra",
    period: "2019 – 2022",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-1.5 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Education
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="text-primary" size={24} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {edu.location}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
