import React, { useState, useEffect } from 'react';
import { motion, useScroll ,useSpring} from 'framer-motion';
import { 
  GithubIcon, 
  LinkedinIcon, 
  MailIcon, 
  ExternalLinkIcon,
  TwitterIcon,
  PhoneCallIcon,
} from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
  })
  const skills = [
    {
      category: "Programming Languages:",
      items: [
        { name: "JavaScript", level: 88 },
        { name: "HTML5", level: 85 },
        { name: "CSS", level: 77 },
        { name: "C++", level: 85 }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "material ui", level: 88 },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 78 }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git&Github", level: 88 },
        { name: "Netlify", level: 75 },
        { name: "Vercel", level: 70 },
        { name: "GoDaddy", level: 72 }
      ]
    }
  ];
  const contactLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/varruunnn", 
      type: "link",
    },
    {
      icon: TwitterIcon,
      href: "https://x.com/_vaarruunn_", 
      type: "link",
    },
    {
      icon: MailIcon,
      href: "mailto:varun.choudhary2512@gmail.com", 
      type: "mail",
    },
    {
      icon: PhoneCallIcon,
      href: "tel: +91 9911880799",
      type: "alert",
      message: "You can call me at: +91 9911880799", 
    },
  ];
  
  const education = [
    {
      degree: "B.Tech in Electronics & Communication",
      school: "Netaji Subhas Institute of Technology, New Delhi",
      year: "2023 - 2027",
    },
  ];

  const projects = [
    {
      name: "BigGameWars",
      description: "Developed a full-stack web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) to facilitate team-based competitions for popular games like Valorant and BGMII.Implemented JWT-based authentication for secure login and signup functionality.Built features for user profile management, allowing users to update their usernames and contact the admin team directly.Purchased and deployed the application on a custom domain using GoDaddy, ensuring a professional and reliable web presence.Estimated to onboard 1,000+ active users within the first phase of its full launch, showcasing the platforms scalability and appeal to the gaming community.",
      technologies: ["React", "Node.js", "TailwindCSS"],
      demoLink: "https://www.biggamewars.com/",
      githubLink: "https://github.com/varruunnn/GamingArena",
    },
    {
      name: "Weather App",
      description: "Designed and developed a real-time weather web application using React and integrated with OpenWeatherMap API.Utilized a reliable weather API to provide accurate, up-to-date weather information for any location.Implemented user-friendly features, including search functionality and responsive design for seamless access across devices.Optimized API integration by allowing users to generate and use their own API key for personalized weather data.",
      technologies: ["React", "Next.js", "ChakraUI"],
      demoLink: "https://weather-app-tau-olive-72.vercel.app/",
      githubLink: "https://github.com/varruunnn/WeatherApp",
    },
    {
      name: "VideoPlayer",
      description: "Developed a video player web application using React for the frontend and MongoDB for video metadata storage.Implemented seamless video upload and playback functionality, enabling users to watch videos directly in the browser without additional software.Ensured persistent video availability by securely storing video metadata in MongoDB, allowing access even after page reloads.Optimized for user convenience with a fully browser-based solution, eliminating the need for app installation.",
      technologies: ["Vue.js", "Express", "CSS"],
      demoLink: "https://private-user-images.githubusercontent.com/143994029/384676413-0fc14560-7dbe-416e-b7e8-2dd09665d8cf.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzUzODIzMTQsIm5iZiI6MTczNTM4MjAxNCwicGF0aCI6Ii8xNDM5OTQwMjkvMzg0Njc2NDEzLTBmYzE0NTYwLTdkYmUtNDE2ZS1iN2U4LTJkZDA5NjY1ZDhjZi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIyOFQxMDMzMzRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OTdjYWE1ODI4NzIzYzMwMmE2OGIxNWZmN2YxMWVmMGU4YWRlNzk0MjYzNWYwNzFiODU4MjcyOGU5MWEwNmVmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.hSz7bKDWSGq0_4d4cezediO9puQpT7d0VgJBI3yEw2o",
      githubLink: "https://github.com/varruunnn/videoPlayer",
    },
    {
      "name": "Dynamic-Event-Calendar-Application",
      "description": "A dynamic and interactive calendar app that allows users to add, edit, and manage events. The app includes features like event filtering, event export (JSON and CSV formats), and the ability to drag-and-drop events across different dates with time conflict checks.\nAdd Events: Easily add events to specific dates, with customizable name, description, start time, end time, and category.\nDrag-and-Drop Events: Move events across different days and times with automatic conflict checks.\nEvent Filtering: Filter events by name or description with a search bar to quickly find relevant events.\nEvent Management: Edit event details, delete events, or add them back to any selected day.\nExport Events: Export the current month's events in either JSON or CSV format for easy data sharing.\nResponsive Design: Works seamlessly across devices with a mobile-friendly interface.",
      "demoLink": "https://dynamic-event-calendar-application-psi.vercel.app/",
      "githubLink": "https://github.com/varruunnn/Dynamic-Event-Calendar-Application.git"
    }
    
  ];

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  };
  const handleIconClick = (type, href, message) => {
    if (type === "link") {
      window.open(href, "_blank", "noopener noreferrer");
    } else if (type === "mail") {
      const mailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${href.split(':')[1]}`;
      window.open(mailLink, "_blank", "noopener noreferrer");
    } else if (type === "alert") {
      alert(message);
    }
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
      <div className="relative bg-[#0a0a0a] min-h-screen overflow-hidden text-white">
          <motion.div id="scroll-indicator"style={{
              scaleX,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: 10,
              originX: 0,
              backgroundColor: "#ff0088",
            }}>
            </motion.div>
        <motion.div
          className="cursor hidden md:block bg-white w-8 h-8 rounded-full fixed top-0 left-0 pointer-events-none z-50"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '50px 50px',
              opacity: 0.1
            }} />
        <div className="relative z-10">
          <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-left ml-4 md:ml-20"
              >
                <motion.h1 
                  className="text-5xl md:text-8xl font-bold mb-6"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <span className="block mt-2 bg-gradient-to-r from-blue-400 via-pink-500 to-red-500 text-transparent bg-clip-text ">Hi I'm</span>
                  <span className="block mt-2 bg-gradient-to-r from-blue-400 via-red-400 to-pink-400 text-transparent bg-clip-text uppercase">
                    Varun Choudhary
                  </span>
                </motion.h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8">
                Aspiring web developer with a strong foundation in MERN currently enhancing skills through hands-on projects. Passionate about creating dynamic and user-friendly web applications, I am eager to contribute to innovative teams. With a keen interest in Web3 technologies.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-white text-black rounded-full text-lg font-medium overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <a href="/resume.pdf">
                    ↓ resume
                    </a>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </motion.div>
            </div>
          </section>
          <section className="py-32 px-4" id="education">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-16 ml-4 md:ml-20"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Education
              </motion.h2>
              <div className="space-y-8 px-4 md:px-20">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 border-l-2 border-blue-500/30 group"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                    <div className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800 group-hover:border-blue-500/50 transition-colors">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-blue-400 mb-2">{edu.school}</p>
                      <p className="text-gray-400 mb-4">{edu.year}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-32 px-4 bg-gradient-to-b from-transparent to-gray-900/50" id="skills">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-16 ml-4 md:ml-20"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Skills
              </motion.h2>
              <div  className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
                {skills.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-colors"
                  >
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {category.category}
                    </h3>
                    <div className="space-y-6">
                      {category.items.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-300">{skill.name}</span>
                            <span className="text-blue-400">{skill.level}%</span>
                          </div>
                          <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              className="absolute h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      View Demo <ExternalLinkIcon className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      GitHub <ExternalLinkIcon className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <section className="py-32 px-4" id="contact">
            <div className="max-w-7xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-8"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Let's Connect
              </motion.h2>
              <div className="flex justify-center gap-8 mb-12">
                {contactLinks.map((contact, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleIconClick(contact.type, contact.href, contact.message);
                    }}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <contact.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white text-black rounded-full text-lg font-medium overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </section>
        </div>
      </div>
  );
};

export default Portfolio;