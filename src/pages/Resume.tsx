import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import PrintableResume from "@/components/PrintableResume";
import SkillsSection from "@/components/SkillsSection";
import { 
  Briefcase, 
  Code, 
  CheckCircle2,
  Brain,
  Cpu,
  Database,
  Globe,
  GitBranch,
  Palette,
  Wrench,
  Target,
  Bot
} from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("skills");

  const experience = [
    {
      position: "Lead Mobile Developer Intern",
      company: "Globe International Distributor Center, Inc",
      duration: "September - November 2025",
      description: "Programmed a large-scale inventory encoding while designing a responsive, modern UI to ensure the application remained user-friendly for warehouse personnel.",
      responsibilities: [
        "Enables warehouse personnel to view, update, and manage inventory counts, starting from a physical paper-based system to a digital mobile format.",
        "Implemented advanced functionalities including a dark mode UI, permission-based storage access, and an automated Excel (.xlsx) export system using Share Plus for seamless inventory data sharing.",
        "Includes a list of orders for inventory that can be edited and filtered by batch to streamline the selection process of users"
      ]
    },
    {
      position: "Work Immersion QA",
      company: "CREOTEC Philippines Inc.",
      duration: "April - March 2020",
      //description: "Developed and maintained web applications using React.js and Node.js. Collaborated with senior developers to implement new features and fix bugs.",
      responsibilities: [
        "Created a team plan to meet daily quotas, and coordinated with the team leader to foster a productive team environment.",
        "Participated in Quality Assurance production",
        "Analyzed the quality of the chips, implemented improvements, and completed daily quotas"
      ]
    }
  ];

  const projects = [
    {
      title: "Warehouse Inventory",
      description: "A cross-platform Flutter application for managing warehouse inventory across multiple branches. Built with Drift for local offline storage, featuring role-based authentication, batch data operations via Excel/CSV, and real-time dashboard analytics.",
      technologies: ["Flutter", "Dart", "Drift", "bcrypt", "file picker", "share plus", "permission handler"],
      duration: "10/2025 - 11/2025",
      type: "Internship",
      accomplishments: [
        "Enabled warehouse personnel to view, update, and manage inventory counts, transitioning from a physical paper-based system to a digital mobile format",
        "Implemented advanced functionalities including a dark mode UI, permission-based storage access, and an automated Excel (.xlsx) export system using Share Plus for seamless inventory data sharing",
        "Included a list of orders for inventory that can be edited and filtered by batch to streamline the selection process of users"
      ]
    },
  /*  {
      title: "Oral Cancer Detection",
      description: "Built a deep learning model to detect and classify oral cancer stages from medical images, helping in early diagnosis and treatment planning.",
      technologies: ["Python", "TensorFlow", "Neural Networks", "Computer Vision", "OpenCV"],
      duration: "05/2023 - 08/2023",
      type: "2nd Year Project",
      accomplishments: [
        "Conducted data collection and preprocessing for oral cancer detection",
        "Designed and implemented a machine learning model for image classification using CNNs",
        "Achieved 89% accuracy in detecting early-stage oral cancer"
      ]
    },
    {
      title: "Object Tracking using OpenCV",
      description: "Developed an object detection and tracking system using OpenCV and KCF Tracker that can identify and follow objects in video streams.",
      technologies: ["Python", "OpenCV", "Computer Vision", "AI"],
      duration: "03/2023 - 04/2023",
      type: "Open-source",
      accomplishments: [
        "Developed an open-source AI project for object detection using encoded data",
        "Utilized compatible video sources to recognize objects seen through a camera",
        "Implemented real-time tracking with minimal latency"
      ]
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Created a machine learning model to analyze whether credit card transactions are fraudulent by identifying unusual patterns and anomalies.",
      technologies: ["Python", "Machine Learning", "Data Science", "Statistical Analysis"],
      duration: "01/2023 - 03/2023",
      type: "Personal Project",
      accomplishments: [
        "Trained models on large datasets of transaction data",
        "Implemented feature engineering to improve detection accuracy",
        "Developed a real-time alert system for suspicious transactions"
      ]
    },
    {
      title: "Contextualized Topic Modeling",
      description: "Built a Python package to run contextualized topic modeling with BERT embeddings, enabling more accurate text analysis and categorization.",
      technologies: ["Python", "NLP", "BERT", "Machine Learning"],
      duration: "11/2022 - 01/2023",
      type: "Research Project",
      accomplishments: [
        "Created a reusable library for topic modeling tasks",
        "Implemented BERT embeddings for improved contextual understanding",
        "Published package with documentation for community use"
      ]
    }, */
  ];

  const softSkills = [
    { skill: "Problem Solving", description: "Analytical approach to complex technical challenges" },
    { skill: "Communication", description: "Clear technical and non-technical communication" },
    { skill: "Team Collaboration", description: "Effective work in cross-functional teams" },
    { skill: "Adaptability", description: "Quick learning of new technologies and methodologies" },
    { skill: "Time Management", description: "Efficient project delivery within deadlines" },
    { skill: "Critical Thinking", description: "Analytical evaluation of solutions and approaches" },
  ];

  const resumeHighlights = [
    { 
      title: "Mobile Developer", 
      description: "Specialized in Flutter, Android Studio, and Dart",
      icon: <Code className="h-8 w-8 text-brand-purple" />
    },
    { 
      title: "Full-Stack Developer", 
      description: "Proficient in both front-end and back-end technologies, creating complete web solutions",
      icon: <Code className="h-8 w-8 text-brand-purple" />
    },
    { 
      title: "Cyber Security", 
      description: "Has knowledge in Data privacy and Data Security",
      icon: <Cpu className="h-8 w-8 text-brand-purple" />
    },
    { 
      title: "Data Analyst", 
      description: "Skilled in data analysis, visualization, and extracting actionable insights",
      icon: <Database className="h-8 w-8 text-brand-purple" />
    },
  ];

  const tabContent = {
    skills: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg flex items-start border border-border"
            >
              <div className="mr-4 bg-brand-purple/10 p-3 rounded-full">
                {highlight.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-foreground">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <SkillsSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="glass-panel p-6 rounded-lg border border-border"
        >
          <h3 className="text-xl font-semibold mb-6 text-foreground">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-1">{item.skill}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <Briefcase className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="text-lg mt-1">{exp.company}</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                {exp.duration}
              </div>
            </div>
            <p className="text-muted-foreground mb-4 pl-0 md:pl-12">{exp.description}</p>
            <div className="pl-0 md:pl-12">
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    projects: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-8 rounded-lg text-center"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">Currently in progress</h3>
            <p className="text-muted-foreground">Projects are being worked on and will be added soon.</p>
          </motion.div>
        ) : (
          projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs py-1 px-3 bg-brand-purple/10 text-brand-purple rounded-full">
                    {project.type}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.duration}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Accomplishments:</h4>
                <ul className="space-y-2">
                  {project.accomplishments.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs py-1 px-3 bg-secondary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    ),
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4 border border-brand-purple/20">
              Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <AnimatedText text="Professional Experience" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I'm an aspiring developer specializing in web development, AI, and machine learning.
                My goal is to leverage these technologies to create innovative solutions for real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <PrintableResume />
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "skills", icon: <Code className="h-5 w-5" />, label: "Skills" },
                { id: "experience", icon: <Briefcase className="h-5 w-5" />, label: "Experience" },
                { id: "projects", icon: <Code className="h-5 w-5" />, label: "Projects" },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors border ${
                    activeTab === tab.id
                      ? "bg-brand-purple text-white border-brand-purple/50"
                      : "bg-secondary/20 text-muted-foreground hover:bg-secondary/40 border-white/10"
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;