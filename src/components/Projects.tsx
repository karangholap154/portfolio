import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import smarttoolsImage from "@/assets/smarttools-hub.jpg";
import healthcareImage from "@/assets/healthcare-booking.jpg";
import employeeImage from "@/assets/employee-management.jpg";
import studyMaterialImage from "@/assets/study-material.jpg";
import storeRatingImage from "@/assets/store-rating.jpg";
import cryptoDashImage from "@/assets/cryptodash.jpg";
import bilixInvoiceImage from "@/assets/bilix-invoice.jpg";
import priMateImage from "@/assets/privmate.jpg";

const projects = [
  {
    title: "Smart Study Material Provider",
    description:
      "Educational platform providing organized study materials with smooth animations and modern UI.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "JavaScript",
      "Supabase",
      "React Router",
    ],
    liveUrl: "https://www.privateacademy.in/",
    githubUrl: "https://github.com/karangholap154/simple-pvt-web",
    image: studyMaterialImage,
  },
  {
    title: "PrivMate - AI powered study companion",
    description:
      "Get instant, accurate answers to any study question. Our AI understands context and provides detailed explanations.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "ShadCn/ui",
      "TypeScript",
      "JavaScript",
      "Supabase",
      "Gemini API",
    ],
    liveUrl: "https://chat.privateacademy.in/",
    githubUrl: "https://github.com/karangholap154/PrivMate-ai",
    image: priMateImage,
  },
  {
    title: "Bilix - Invoice Generator",
    description:
      "A sleek and user-friendly invoice generator with customizable templates and PDF export functionality.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCn/ui",
      "Framer Motion",
      "React Hook Form",
      "jsPDF",
      "Vercel",
      "React Router",
      "Supabase",
    ],
    liveUrl: "https://bilix.vercel.app/",
    githubUrl: "https://github.com/karangholap154/bilix-invoice",
    image: bilixInvoiceImage,
  },
  {
    title: "SmartTools Hub | Utility Tools Platform",
    description:
      "A comprehensive collection of web-based productivity tools built with modern technologies and responsive design.",
    tech: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "React Router",
    ],
    liveUrl: "https://smarttoolshub.vercel.app",
    githubUrl: "https://github.com/karangholap154/smarttoolshub",
    image: smarttoolsImage,
  },
  {
    title: "Healthcare Appointment Booking",
    description:
      "Easy-to-use healthcare appointment booking system with real-time availability and patient management.",
    tech: [
      "React",
      "TypeScript",
      "Context API",
      "React Router",
      "Tailwind CSS",
      "Lucide Icons",
    ],
    liveUrl: "https://easyhealthbooking.vercel.app",
    githubUrl:
      "https://github.com/karangholap154/healthcare-appointment-booking",
    image: healthcareImage,
  },
  {
    title: "CryptoDash - Cryptocurrency Dashboard",
    description:
      "A modern, production-ready cryptocurrency dashboard built with React, TypeScript, and TailwindCSS. Features live data from the CoinGecko API with comprehensive market insights.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "CoinGecko API",
      "React Router",
      "Axios",
    ],
    liveUrl: "https://cryptocurrency-dashboard-lyart.vercel.app/",
    githubUrl: "https://github.com/karangholap154/cryptocurrency-dashboard",
    image: cryptoDashImage,
  },
  {
    title: "Employee Management System",
    description:
      "Full-stack employee management solution with CRUD operations and PostgreSQL database integration.",
    tech: [
      "React.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Tailwind CSS",
      "RESTful API",
      "JavaScript",
    ],
    liveUrl: "https://github.com/karangholap154/employee-management-system",
    githubUrl: "https://github.com/karangholap154/employee-management-system",
    image: employeeImage,
  },
  {
    title: "Store Rating App",
    description:
      "This is a full-stack web application that allows users to submit ratings for stores. It features role-based access control.",
    tech: [
      "React.js",
      "Node.js",
      "Express",
      "Axios",
      "PostgreSQL",
      "JWT",
      "bcryptjs",
      "Tailwind CSS",
      "RESTful API",
      "JavaScript",
    ],
    liveUrl: "https://store-rating-app-mauve.vercel.app",
    githubUrl: "https://github.com/karangholap154/store-rating-app",
    image: storeRatingImage,
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
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
