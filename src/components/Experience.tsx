import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "Freelance",
    period: "2023 - Present",
    location: "Remote",
    responsibilities: [
      "Developed and deployed full-stack web applications using MERN stack",
      "Built responsive healthcare booking system with real-time appointment management",
      "Created employee management system with role-based access control",
      "Implemented RESTful APIs and integrated third-party services",
      "Optimized application performance and user experience"
    ]
  },
  {
    title: "Web Developer Intern",
    company: "NxtWave",
    period: "2022 - 2023",
    location: "Remote",
    responsibilities: [
      "Completed intensive MERN stack training program",
      "Built multiple real-world projects including e-commerce platforms",
      "Learned industry best practices for clean code and maintainability",
      "Collaborated on team projects using Git and Agile methodologies",
      "Gained expertise in React.js, Node.js, Express.js, and MongoDB"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-1.5 md:px-6 bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Work Experience
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul 
                  className="space-y-3" 
                  role="list"
                  aria-label={`Responsibilities at ${exp.company}`}
                >
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
