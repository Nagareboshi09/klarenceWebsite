import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import { 
  Bot, 
  MonitorSmartphone,
  Database,
  Cpu,
  Filter,
  Search,
  Code,
  Brain,
  BarChart,
  ArrowUpDown,
  Smartphone
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  code: string;
  category: string;
}

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortAscending, setSortAscending] = useState(true);

  const projects: Project[] = [
    {
      id: 1,
      title: "Warehouse Inventory",
      description: "A cross-platform Flutter application for managing warehouse inventory across multiple branches. Built with Drift for local offline storage, featuring role-based authentication, batch data operations via Excel/CSV, and real-time dashboard analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      tags: ["Flutter", "Dart", "Drift", "bcrypt", "file picker", "share plus", "permission handler"],
      code: "https://appetize.io/app/b_b7htgjbrj7xz4djo67u363wzbm",
      category: "mobile"
    },
     {
      id: 2,
      title: "A Web-Based Project Monitoring System for Pest Control Services",
      description: "The project is a web-based project monitoring system designed for MacJ Pest Control Services. Its primary goal is to digitize and automate the company's operations, replacing manual processes for scheduling, reporting, project monitoring, and chemical inventory management. The system enables office administrators and technicians to collaborate through real-time updates, automated scheduling, mobile reporting, and inventory tracking, resulting in faster and more accurate business operations.",
      image: "/macjwebsite.png",
      tags: ["PHP 7.4", "JavaScript","HTML", "CSS", "MySQL", "XAMPP", "Git & GitHub"],
      code: "https://github.com/Nagareboshi09/PestControl-System",
      category: "web"
    },
   /* {
      id: 3,
      title: "Credit Card Fraud Detection",
      description: "A simple machine learning model which analyzes whether a credit card transaction is fraudulent or not. The dataset is downloaded from Kaggle and processed for analysis.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      tags: ["Python", "Machine Learning", "Data Science"],
      code: "https://github.com/oxBinaryBrain/CC-Fraud-Detection",
      category: "ai"
    },
    {
      id: 4,
      title: "Contextualized Topic Modeling",
      description: "A python package to run contextualized topic modeling. CTMs combine contextualized embeddings (e.g., BERT) with topic models to get coherent topics and document classification.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      tags: ["Python", "NLP", "Machine Learning"],
      code: "https://github.com/oxBinaryBrain/contextualized-topic-models",
      category: "ai"
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product catalog, and payment processing.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "Node.js", "React", "MongoDB"],
      code: "https://github.com/oxBinaryBrain/E-commerce",
      category: "web"
    },
    {
      id: 6,
      title: "Personal Portfolio",
      description: "A responsive personal portfolio website showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node", "HTML","CSS"],
      code: "https://github.com/oxBinaryBrain/Portfolio_V1",
      category: "web"
    },
    {
      id: 7,
      title: "Blockchain Explorer",
      description: "A web interface for exploring blockchain data and transactions.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "React", "Blockchain", "Web3.js"],
      code: "https://github.com/oxBinaryBrain/Software-solution-to-identify-the-end-receiver-of-a-cryptocurrency-transaction",
      category: "blockchain"
    },
    {
      id: 8,
      title: "Smart Home Dashboard",
      description: "A dashboard for monitoring and controlling smart home devices.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
      tags: ["C", "IoT", "NArdiuno"],
      code: "https://github.com/oxBinaryBrain/Ardiuno",
      category: "iot"
    } */
  ];

  const quickSort = (arr: Project[], compareFn: (a: Project, b: Project) => number): Project[] => {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left: Project[] = [];
    const middle: Project[] = [];
    const right: Project[] = [];

    for (const item of arr) {
      const comparison = compareFn(item, pivot);
      if (comparison < 0) {
        left.push(item);
      } else if (comparison > 0) {
        right.push(item);
      } else {
        middle.push(item);
      }
    }

    return [...quickSort(left, compareFn), ...middle, ...quickSort(right, compareFn)];
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "ai":
        return Bot;
      case "web":
        return MonitorSmartphone;
      case "mobile":
        return Smartphone;
      case "blockchain":
        return Database;
      case "iot":
        return Cpu;
      case "ml":
        return Brain;
      case "data":
        return BarChart;
      default:
        return Code;
    }
  };

  const filteredProjects = quickSort(
    projects.filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    ),
    (a, b) => sortAscending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  );

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="My Projects" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Explore a collection of my recent work across various technologies and domains.
              </p>
            </div>
          </motion.div>

          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.1)" }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass-panel p-6 rounded-lg">
              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-muted-foreground" />
                </div>
                <motion.input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  whileFocus={{ boxShadow: "0 0 0 3px rgba(155, 135, 245, 0.3)" }}
                />
              </div>

              {/* Sort Button */}
              <motion.button
                onClick={() => setSortAscending(!sortAscending)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-muted-foreground rounded-lg text-sm font-medium transition-colors"
              >
                <ArrowUpDown className="w-4 h-4" />
                <span>Sort by Name {sortAscending ? '(A-Z)' : '(Z-A)'}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  code={project.code}
                  category={project.category}
                  icon={getIcon(project.category)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 flex items-center justify-center"
              >
                <div className="text-center py-16 px-8 glass-panel rounded-lg max-w-md w-full">
                  <p className="text-xl text-muted-foreground">Currently in progress</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
