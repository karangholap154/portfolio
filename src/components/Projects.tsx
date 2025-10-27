import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import smarttoolsImage from "@/assets/smarttools-hub.jpg";
import healthcareImage from "@/assets/healthcare-booking.jpg";
import employeeImage from "@/assets/employee-management.jpg";
import studyMaterialImage from "@/assets/study-material.jpg";

const projects = [
  {
    title: "SmartTools Hub",
    description: "A comprehensive collection of web-based productivity tools built with modern technologies and responsive design.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://smarttoolshub.vercel.app",
    githubUrl: "https://github.com/karangholap154",
    image: smarttoolsImage,
  },
  {
    title: "Healthcare Appointment Booking",
    description: "Easy-to-use healthcare appointment booking system with real-time availability and patient management.",
    tech: ["React", "TypeScript", "Context API"],
    liveUrl: "https://easyhealthbooking.vercel.app",
    githubUrl: "https://github.com/karangholap154",
    image: healthcareImage,
  },
  {
    title: "Employee Management System",
    description: "Full-stack employee management solution with CRUD operations and PostgreSQL database integration.",
    tech: ["React.js", "Node.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/karangholap154",
    image: employeeImage,
  },
  {
    title: "Smart Study Material Provider",
    description: "Educational platform providing organized study materials with smooth animations and modern UI.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://privateacademy.vercel.app",
    githubUrl: "https://github.com/karangholap154",
    image: studyMaterialImage,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-1.5 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-60" />
                </div>

                {/* Glassmorphic overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" size={16} />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border hover:border-primary hover:text-primary"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={16} />
                        GitHub
                      </a>
                    </Button>
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
