import { motion } from "framer-motion";
import { Code2, Database, Wrench, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: Code2,
    skills: ["Node.js", "Express.js", "Python", "Flask"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Figma", "AWS", "Vercel", "Netlify"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-1.5 md:px-6 bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
