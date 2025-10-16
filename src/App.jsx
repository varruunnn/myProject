import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactLinks } from "./components/contactLinks";
import { skills } from "./components/skills";
import { projects } from "./components/projects";
import { experiences } from "./components/experiences";
import {
  GithubIcon,
  MailIcon,
  ExternalLinkIcon,
  TwitterIcon,
  PhoneCallIcon,
  MapPinIcon,
  UserIcon,
  Code2Icon,
  BriefcaseIcon,
  GraduationCapIcon,
  Container
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isDark, setisDark] = useState(false);
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleContactClick = (href, label) => {
    if (label === "Email") {
      alert("Email: varun.choudhary2512@gmail.com");
    } else {
      window.open(href, "_blank", "noopener noreferrer");
    }
  };

  const changeTheme = (e) => {
    alert("changedTheme");
  };

  const sections = [
    { id: "about", label: "About", icon: UserIcon },
    { id: "experience", label: "Experience", icon: BriefcaseIcon },
    { id: "projects", label: "Projects", icon: Code2Icon },
    { id: "contact", label: "Contact", icon: MailIcon }
  ];

  const sectionRefs = {
    experience: expRef,
    projects: projectsRef,
    contact: contactRef
  };

  useEffect(() => {
    const targetRef = sectionRefs[activeSection];
    if (targetRef?.current) {
      setTimeout(() => {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex justify-center">
            <div className="flex space-x-8 sm:space-x-4 overflow-x-auto scrollbar-none">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${activeSection === section.id
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-900"
                    }`}
                >
                  <section.icon size={16} />
                  <span className="text-sm font-medium">{section.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6">
          <section ref={aboutRef} className="py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-bold mb-2">Hi, I'm Varun Choudhary</h1>
              <div className="flex flex-col-3 items-center justify-center">
                <p className="text-xl text-gray-300 mb-4">
                  <a href="https://hashnode.com/@varuunnn" target="_blank" rel="noopener noreferrer" className="hover:underline text-green-200">
                    Blogs
                  </a> | Full Stack Engineer | &nbsp;
                </p>
                <p className="text-xl text-gray-300 mb-4">
                  <a href="https://leetcode.com/u/varrrruuunnn" target="_blank" rel="noopener noreferrer" className="hover:underline text-green-200">
                    LeetCode
                  </a>
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for opportunities</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              I'm a Full Stack Developer passionate about building cutting-edge web applications with modern technologies. I specialize in crafting seamless user experiences and robust backend systems, and I'm currently expanding my expertise into Rust Web3, DevOps, and containerization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                View Resume
              </a>
              <button
                onClick={() => setActiveSection("contact")}
                className="px-6 py-3 border border-gray-600 rounded-lg font-medium hover:border-gray-400 transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>
          </section>
          
          <div ref={expRef} id="experience-anchor" className="absolute"></div>
          <div ref={projectsRef} id="projects-anchor" className="absolute"></div>
          <div ref={contactRef} id="contact-anchor" className="absolute"></div>

          <AnimatePresence mode="wait">
            {activeSection === "about" && (
              <motion.section
                key="about"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="py-16"
              >
                <div className="mb-16">
                  <div className="flex items-center justify-center mb-8">
                    <GraduationCapIcon className="mr-3" size={24} />
                    <h3 className="text-2xl font-bold">Education</h3>
                  </div>
                  <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 max-w-2xl mx-auto">
                    <h4 className="text-xl font-bold mb-2">B.Tech in Electronics & Communication</h4>
                    <p className="text-blue-400 mb-2">Netaji Subhas Institute of Technology, New Delhi</p>
                    <p className="text-gray-400 mb-4">2023 - 2027</p>
                    <p className="text-gray-300">
                      Focusing on electronics fundamentals while pursuing web development through projects and self-learning.
                      Active participant in college hackathons and tech events.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-8">
                    <Code2Icon className="mr-3" size={24} />
                    <h3 className="text-2xl font-bold">Skills</h3>
                  </div>
                  <div className="space-y-12 max-w-6xl mx-auto">
                    {skills.map((skillCategory, categoryIndex) => (
                      <div key={categoryIndex} className="text-center">
                        <h4 className="text-xl font-semibold text-gray-300 mb-6">
                          {skillCategory.category}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                          {skillCategory.items.map((skill, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ y: -5, scale: 1.05 }}
                              onHoverStart={() => setHoveredSkill(`${categoryIndex}-${index}`)}
                              onHoverEnd={() => setHoveredSkill(null)}
                              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-200 text-center"
                            >
                              <div className="mb-3 flex justify-center">
                                {skill.icon}
                              </div>
                              <p className="text-sm font-medium text-gray-300">{skill.name}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}

            {activeSection === "experience" && (
              <motion.section
                ref={expRef}
                key="experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="py-16"
              >
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <BriefcaseIcon className="mr-3" size={32} />
                    <h2 className="text-3xl font-bold">Experience</h2>
                  </div>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Here's a timeline of my professional journey, showcasing my roles and contributions.
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 border-l-2 border-blue-500/30 pb-8"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                      <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                            <p className="text-blue-400 font-medium">{exp.company}</p>
                          </div>
                          <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {exp.links && exp.links.length > 0 && (
                          <div className="mt-4 gap-2 flex flex-col-1">
                            {exp.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline block text-sm"
                              >
                                🔗 {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {activeSection === "projects" && (
              <motion.section
                key="projects"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="py-16"
                ref={projectsRef}
              >
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <Code2Icon className="mr-3" size={32} />
                    <h2 className="text-3xl font-bold">Featured Projects</h2>
                  </div>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    A collection of projects that showcase my skills and passion for development.
                  </p>
                </div>

                <div className="grid gap-8 max-w-4xl mx-auto">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-200"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                          <p className="text-gray-300 max-w-2xl">{project.description}</p>
                        </div>
                        <div className="flex gap-3 flex-shrink-0">
                          {project.demoLink && (
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                              <ExternalLinkIcon size={16} />
                              Live Demo
                            </a>
                          )}
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium hover:border-gray-400 transition-colors"
                          >
                            <GithubIcon size={16} />
                            Code
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-auto mt-6 rounded-lg border border-gray-800 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {activeSection === "contact" && (
              <motion.section
                key="contact"
                ref={contactRef}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="py-16 overflow-x-hidden"
              >
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <MailIcon className="mr-3" size={32} />
                    <h2 className="text-3xl font-bold">Let's Connect</h2>
                  </div>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <div className="grid gap-6">
                    {contactLinks.map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-200
                        max-[361px]:mx-[-15px]
                        "
                      >
                        <button
                          onClick={() => handleContactClick(contact.href, contact.label)}
                          className="w-full flex items-center justify-between text-left"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="p-3 bg-gray-800 rounded-lg">
                              <contact.icon size={24} />
                            </div>
                            <div>
                              <h3 className="font-medium text-white">{contact.label}</h3>
                              <p className="text-gray-400 text-sm">{contact.username}</p>
                            </div>
                          </div>
                          <ExternalLinkIcon size={20} className="text-gray-400" />
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm">
                      Open to remote opportunities and collaborations worldwide
                    </p>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;

