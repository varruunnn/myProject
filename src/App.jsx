import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaAws,
  FaRust 
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
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
import { SiFramer, SiDjango, SiFlask, SiRender, SiRailway, SiVercel, SiGodaddy, SiSolidity, SiWeb3Dotjs, SiApachekafka } from "react-icons/si";
import { DiRedis } from "react-icons/di";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isDark,setisDark] = useState(false);

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
        { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
        { name: "C++", icon: <CgCPlusPlus size={40} color="#00599C" /> },
        { name: "Python", icon: <FaPython size={40} color="#ffea75" /> },
        { name: "TypeScript", icon: <SiTypescript size={40} color="#ADD8E6" /> },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact size={40} color="#61DAFB" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
        { name: "Framer Motion", icon: <SiFramer size={40} color="#0055FF" /> },
        { name: "Next.js", icon: <SiNextdotjs size={40} color="#b1bbc9" /> },
        { name: "Redux", icon: <SiRedux size={40} color="#764ABC" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" /> },
        { name: "Express", icon: <SiExpress size={40} color="#FFFFFF" /> },
        { name: "Django", icon: <SiDjango size={40} color="#FFFFFF" /> },
        { name: "Flask", icon: <SiFlask size={40} color="#dddddd" /> },
        { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
        { name: "Redis", icon: <DiRedis size={40} color="#FF0000" /> },
        { name: "Kafka", icon: <SiApachekafka size={40} color="#FFFFFF" /> },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git & GitHub", icon: <FaGitAlt size={40} color="#F05032" /> },
        { name: "AWS", icon: <FaAws size={40} color="#FFFFFF" /> },
        { name: "Render", icon: <SiRender size={40} color="#46E3B7" /> },
        { name: "Railway", icon: <SiRailway size={40} color="#FF9900" /> },
        { name: "Vercel", icon: <SiVercel size={40} color="#FFFFFF" /> },
      ],
    },
    {
      category: "Currently Learning",
      items: [
        { name: "Solidity", icon: <SiSolidity size={40} color="#363636" /> },
        { name: "Web3", icon: <SiWeb3Dotjs size={40} color="#F16822" /> },
        { name: "Rust", icon: <FaRust size={44} color="#FF9900" /> },
      ],
    },
  ];

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Ignicult",
      period: "Present",
      description: "Designing and implementing scalable web applications for gaming platform integrating Web3 technologies.",
      technologies: ["React", "Node.js", "ThirdWeb Sdk"]
    }
  ];

  const projects = [
    {
      name: "OpenGet - Parallel Download Manager",
      description: "A powerful CLI + Web download manager that speeds up large file downloads using multithreading and chunking, built with Python and Flask.",
      longDescription: "⚡ Built a multithreaded download accelerator that boosts speed by 1.3x+ via parallel chunk downloading.🧠 Architected a modular Python codebase with clear separation of CLI, core downloader logic, and resumable download support.🌐 Added a real-time web UI using Flask + JS to visualize progress, status, and control download jobs.⏸️ Implemented pause/resume functionality with persistent job tracking, even across browser reloads or connection drops.📁 Designed a clean API backend to manage download jobs, track status, and expose resumable endpoints.🧪 Verified chunk-based performance improvement and built a test harness to benchmark against traditional methods.",
      technologies: ["Python", "Flask", "Multithreading", "Requests", "JavaScript", "HTML/CSS"],
      img: "/openget.png",
      color: "#10b981",
      githubLink: "https://github.com/varruunnn/OpenGet",
      featured: true
    },
    {
      name: "Animated AI Videos Genrator",
      description: "This is a web-based application that allows users to generate dynamic, creative p5.js animations using natural language prompts. Built using React, Node.js, and Google's Gemini API, this tool transforms plain English into live-running code with a visual preview.",
      longDescription: "🚀 Built a full-stack web app that transforms natural language prompts into dynamic 2D animations using AI and p5.js.🤖 Integrated Google Gemini (LLM) to generate executable p5.js code from user input in real time.💡 Designed a modular React frontend with live canvas rendering, code preview, and HTML export features.🧩 Architected a Node.js + Express backend with robust API routing and environment-based Gemini key handling.🖼️ Developed a custom p5.js sandbox for securely executing and rendering generated code in-browser.⚡ Reduced manual animation prototyping time by automating creative sketch generation from simple text.",
      technologies: ["React", "Node.js", "Express", "p5.js", "Google Gemini", "TailwindCSS"],
      img: "/animatedvideogenrator1.png",
      color: "#4f46e5",
      demoLink: "https://animated-videos-genrator.vercel.app/",
      githubLink: "https://github.com/varruunnn/animated-videos-genrator/tree/main",
      featured: true
    },
    {
      name: "BigGameWars",
      description: "A MERN stack application facilitating team competitions for popular games like Valorant and BGMII. Features JWT authentication, user profiles, and admin communication. Deployed on GoDaddy with 1,000+ projected active users.",
      longDescription: "Developed a full-stack web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) to facilitate team-based competitions for popular games like Valorant and BGMII. Implemented JWT-based authentication for secure login and signup functionality. Built features for user profile management, allowing users to update their usernames and contact the admin team directly. Purchased and deployed the application on a custom domain using GoDaddy, ensuring a professional and reliable web presence. Estimated to onboard 1,000+ active users within the first phase of its full launch, showcasing the platform's scalability and appeal to the gaming community.",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "JWT"],
      img: "/biggamewars.png",
      color: "#4f46e5",
      demoLink: "https://www.biggamewars.com/",
      githubLink: "https://github.com/varruunnn/GamingArena",
      featured: true
    },
    {
      name: "RealTimeEditor",
      description: "A collaborative platform for frontend developers featuring live code editing, preview, design uploads, and real-time annotations using Socket.IO for synchronization.",
      longDescription: "A modern real-time platform tailored for frontend developers and interviewers. This tool enables seamless collaboration by providing features to upload designs, live code with peers, and even annotate designs in real-time. Room Creation & Joining: Create or join rooms to collaborate in real-time. Live Code Editor: Write HTML, CSS, and JS using a powerful CodeMirror-based editor. Live Preview: Instantly preview your code changes in a live-rendered iframe. Image Upload: Upload Figma files or other design mockups to collaborate visually. Real-Time Annotations: Annotate designs using a pencil tool or eraser for live feedback. Socket.IO Integration: Ensures all changes, including code, annotations, and image uploads, are synchronized in real-time.",
      technologies: ["React", "Node.js", "Socket.IO", "CodeMirror", "TailwindCSS"],
      img: "/realtime.png",
      color: "#0ea5e9",
      demoLink: "https://real-time-editor-gilt.vercel.app",
      githubLink: "https://github.com/varruunnn/RealTimeEditor.git",
      featured: true
    },
        {
      name: "VideoPlayer",
      description: "A browser-based video player built with React and MongoDB that enables seamless upload and playback with persistent video metadata storage.",
      longDescription: "Developed a video player web application using React for the frontend and MongoDB for video metadata storage. Implemented seamless video upload and playbook functionality, enabling users to watch videos directly in the browser without additional software. Ensured persistent video availability by securely storing video metadata in MongoDB, allowing access even after page reloads. Optimized for user convenience with a fully browser-based solution, eliminating the need for app installation.",
      technologies: ["React", "Express", "MongoDB", "CSS"],
      img: "/videoplay.png",
      color: "#ec4899",
      demoLink: "https://github.com/varruunnn/videoPlayer",
      githubLink: "https://github.com/varruunnn/videoPlayer",
      featured: false
    },
        {
      name: "Dynamic Event Calendar",
      description: "An interactive calendar app with drag-and-drop event management, filtering, conflict detection, and export capabilities in JSON and CSV formats.",
      longDescription: "A dynamic and interactive calendar app that allows users to add, edit, and manage events. The app includes features like event filtering, event export (JSON and CSV formats), and the ability to drag-and-drop events across different dates with time conflict checks. Add Events: Easily add events to specific dates, with customizable name, description, start time, end time, and category. Drag-and-Drop Events: Move events across different days and times with automatic conflict checks. Event Filtering: Filter events by name or description with a search bar to quickly find relevant events. Event Management: Edit event details, delete events, or add them back to any selected day. Export Events: Export the current month's events in either JSON or CSV format for easy data sharing. Responsive Design: Works seamlessly across devices with a mobile-friendly interface.",
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      img: "/calender.png",
      color: "#f59e0b",
      demoLink: "https://dynamic-event-calendar-application-psi.vercel.app/",
      githubLink: "https://github.com/varruunnn/Dynamic-Event-Calendar-Application.git",
      featured: false
    },
    {
      name: "Weather App",
      description: "A React-based weather application using OpenWeatherMap API, featuring location search and responsive design with personal API key integration.",
      longDescription: "Designed and developed a real-time weather web application using React and integrated with OpenWeatherMap API. Utilized a reliable weather API to provide accurate, up-to-date weather information for any location. Implemented user-friendly features, including search functionality and responsive design for seamless access across devices. Optimized API integration by allowing users to generate and use their own API key for personalized weather data.",
      technologies: ["React", "Next.js", "ChakraUI", "API Integration"],
      img: "/weather.png",
      color: "#06b6d4",
      demoLink: "https://weather-app-tau-olive-72.vercel.app/",
      githubLink: "https://github.com/varruunnn/WeatherApp",
      featured: false
    },
  ];
  const contactLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/varruunnn",
      label: "GitHub",
      username: "@varruunnn"
    },
    {
      icon: TwitterIcon,
      href: "https://x.com/_vaarruunn_",
      label: "Twitter",
      username: "@_vaarruunn_"
    },
    {
      icon: MailIcon,
      href: "mailto:varun.choudhary2512@gmail.com",
      label: "Email",
      username: "varun.choudhary2512@gmail.com"
    }
  ];

  const handleContactClick = (href, label) => {
    if (label === "Email") {
      alert("Email: varun.choudhary2512@gmail.com");
    } else {
      window.open(href, "_blank", "noopener noreferrer");
    }
  };
  const changeTheme = (e) =>{
    alert("changedTHmee")
  }

  const sections = [
    { id: "about", label: "About", icon: UserIcon },
    { id: "experience", label: "Experience", icon: BriefcaseIcon },
    { id: "projects", label: "Projects", icon: Code2Icon },
    { id: "contact", label: "Contact", icon: MailIcon }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
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

      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6">

          {/* Profile Section */}
          <section className="py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 mx-auto mb-6 flex items-center justify-center">
                <img src="./pp.jpg" alt="" />
              </div>
              <h1 className="text-4xl font-bold mb-2">Hi, I'm Varun Choudhary</h1>
              <p className="text-xl text-gray-300 mb-4">
                <a href="https://hashnode.com/@varuunnn" target="_blank" rel="noopener noreferrer" className="hover:underline text-green-200">
                  Blogs
                </a> | Full Stack Engineer
              </p>
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
                Download Resume
              </a>
              <button
                onClick={() => setActiveSection("contact")}
                className="px-6 py-3 border border-gray-600 rounded-lg font-medium hover:border-gray-400 transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>
          </section>

          {/* Dynamic Content Based on Active Section */}
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

                {/* Education */}
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

                {/* Skills */}
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