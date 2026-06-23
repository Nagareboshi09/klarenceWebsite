
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { BookOpen } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      id: 1,
      institution: "STI College Muñoz-EDSA",
      degree: "Bachelor of Information Technology",
      duration: "2022 - 2026",
      location: "Tango Bldg, Congressional Avenue Corner Edsa Avenue, Ramon Magsasay, Quezon City",
      gwa: "1.47",
      details: [
        "Fundamentals of Cyber Security data privacy and security",
        "Key courses include Data Structures and Algorithms",
        "Relational Database, Unstructured Database using MySQL and MsSql",
        "JavaScript Fundamentals, OOP",
        "SAP/S4HANA and Business 1"
      ]
    },
    {
      id: 2,
      institution: "Perpetual Help College of Manila",
      degree: "Senior High-School",
      duration: "2018 - 2020",
      location: "1240 Concepcion St, Sampaloc, Manila, 1008 Metro Manila",
      gwa: "N/A",
      details: [
        "Technology Vocational Science",
        "Learned computer hardware and troubleshooting",
        "Developed strong foundation in scientific principles and programming"
      ]
    },
    {
      id: 3,
      institution: "Perpetual Help College of Manila",
      degree: "High School",
      duration: "2014 - 2017",
      location: "1240 Concepcion St, Sampaloc, Manila, 1008 Metro Manila",
      gwa: "N/A",
      details: [
        "Strong foundation in English and Filipino",
        "Algebra, Geometry, and basic Statistics.",
        "Philippine History, Asian History, World History, and Economics.",
        "Music, Arts, Physical Education, and Health (MAPEH), Technology and Livelihood Education (TLE), and Edukasyon sa Pagpapakatao (Values Education)."
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Java Fundamentals",
      issuer: "STI Munoz-EDSA",
      date: "2022",
      description: "Comprehensive course covering Object Oriented Programming."
    },
    {
      id: 2,
      name: "SAP Business 1/ SAP S4/HANA",
      issuer: "STI Munoz-EDSA",
      date: "2023 and 2025",
      description: "In-depth training using SAP applications"
    },
    {
      id: 3,
      name: "freeCodeCamp Responsive Web DesignV8",
      issuer: "freeCodeCamp",
      date: "2026",
      description: "Creating a website using semantic elements, promiting accessibility and using typography."
    },
    {
      id: 4,
      name: "Javascript",
      issuer: "freeCodeCamp",
      date: "2026",
      description: "Javascript fundamentals, Data structures and algorithm, Trees, Classes, Functional programming, Promises and etc."
    },
    {
      id: 5,
      name: "Microsoft: Azure AI Fundamentals",
      issuer: "TESDA",
      date: "2026",
      description: "Certified in Azure AI Fundamentals through TESDA’s ICT digital initiative. Validated competency in cloud computing architecture, machine learning anomalies detection, automated feature engineering, and deploying conversational chatbots through Microsoft Azure AI Services."
    }
  ];

  const courseHighlights = [
    "Data Structures and Algorithms",
    "SAP S4/HANA & Business 1",
    "System Administration",
    "Database Management Systems",
    "Networking and Hardware",
    "Operating Systems",
    "Web Development fundamentals",
    "Cyber Security data privacy and data security",
    "Cloud Computing",
    "Technopreneurship",
    "Event Driven Programming",
    "Computer programming 1 and 2"
  ];

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
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Academics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Educational Background" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                My academic journey, courses, and educational achievements that have shaped my technical expertise.
              </p>
            </div>
          </motion.div>

          {/* Education Cards */}
          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  institution={edu.institution}
                  degree={edu.degree}
                  duration={edu.duration}
                  location={edu.location}
                  gwa={edu.gwa}
                  details={edu.details}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Key Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.1)" }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Key Courses</h2>
            
            <div className="glass-panel p-10 rounded-lg">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-teal-500/10 p-4 rounded-full">
                  <BookOpen className="h-8 w-8 text-teal-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseHighlights.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(155, 135, 245, 0.2)", 
                      color: "#9b87f5"
                    }}
                    className="flex items-center p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="h-2 w-2 rounded-full bg-teal-400 mr-3" />
                    <span>{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard 
                  key={cert.id}
                  name={cert.name}
                  issuer={cert.issuer}
                  date={cert.date}
                  description={cert.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
