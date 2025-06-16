import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiDjango,
  SiFlask,
  SiNextdotjs,
  SiRailway,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
  SiApachekafka,
  SiSolidity,
  SiWeb3Dotjs,
  SiRender,
  SiTypescript,
  SiVercel,
  SiGodaddy,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { DiRedis } from "react-icons/di";
import ReactGA from "react-ga4";
import {
  GithubIcon,
  MailIcon,
  ExternalLinkIcon,
  TwitterIcon,
  PhoneCallIcon,
  Code2Icon,
  BookOpenIcon,
  BriefcaseIcon,
  UserIcon,
  SendIcon,
} from "lucide-react";

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showParticles, setShowParticles] = useState(true);
  const particlesRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
      ReactGA.initialize(measurementId);
      ReactGA.send("pageview");
    } else {
      console.warn("⚠️ GA ID not found in import.meta.env");
    }
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
        { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
        { name: "C++", icon: <CgCPlusPlus size={40} color="#00599C" /> },
        { name: "Python", icon: <FaPython size={40} color="#ffea75" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript size={40} color="#ADD8E6" />,
        },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact size={40} color="#61DAFB" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={40} color="#06B6D4" />,
        },
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
        {
          name: "PostgreSQL",
          icon: <SiPostgresql size={40} color="#336791" />,
        },
        { name: "Redis", icon: <DiRedis size={40} color="#FF0000" /> },
        { name: "Kafka", icon: <SiApachekafka size={40} color="#FFFFFF" /> },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git & GitHub", icon: <FaGitAlt size={40} color="#F05032" /> },
        { name: "Render", icon: <SiRender size={40} color="#46E3B7" /> },
        { name: "Railway", icon: <SiRailway size={40} color="#FF9900" /> },
        { name: "Vercel", icon: <SiVercel size={40} color="#000000" /> },
        { name: "GoDaddy", icon: <SiGodaddy size={40} color="#1BDB80" /> },
      ],
    },
    {
      category: "Currently Learning",
      items: [
        { name: "Solidity", icon: <SiSolidity size={40} color="#363636" /> },
        { name: "Web3", icon: <SiWeb3Dotjs size={40} color="#F16822" /> },
      ],
    },
  ];
  const contactLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/varruunnn",
      type: "link",
      label: "GitHub",
    },
    {
      icon: TwitterIcon,
      href: "https://x.com/_vaarruunn_",
      type: "link",
      label: "Twitter",
    },
    {
      icon: MailIcon,
      href: "mailto:varun.choudhary2512@gmail.com",
      type: "mail",
      label: "Email",
    },
    {
      icon: PhoneCallIcon,
      href: "tel: +91 9911880799",
      type: "alert",
      message: "You can call me at: +91 9911880799",
      label: "Phone",
    },
  ];

  const education = [
    {
      degree: "B.Tech in Electronics & Communication",
      school: "Netaji Subhas Institute of Technology, New Delhi",
      year: "2023 - 2027",
      description:
        "Focusing on electronics fundamentals while pursuing web development through projects and self-learning. Active participant in college hackathons and tech events.",
    },
  ];

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Ignicult",
      period: "Present",
      description:
        "Designing and implementing scalable, high-performance web applications for a revolutionary hyper-casual gaming platform integrating off-chain and on-chain rewards. Managing the entire development lifecycle, from design to enduser application, ensuring seamless integration of Web3 technologies(sdk). View the design and frontend made - ",
      technologies: [""],
    },
  ];

  const projects = [
    {
      name: "OpenGet - Parallel Download Manager",
      description:
        "A powerful CLI + Web download manager that speeds up large file downloads using multithreading and chunking, built with Python and Flask.",
      longDescription:
        "⚡ Built a multithreaded download accelerator that boosts speed by 1.3x+ via parallel chunk downloading.🧠 Architected a modular Python codebase with clear separation of CLI, core downloader logic, and resumable download support.🌐 Added a real-time web UI using Flask + JS to visualize progress, status, and control download jobs.⏸️ Implemented pause/resume functionality with persistent job tracking, even across browser reloads or connection drops.📁 Designed a clean API backend to manage download jobs, track status, and expose resumable endpoints.🧪 Verified chunk-based performance improvement and built a test harness to benchmark against traditional methods.",
      technologies: [
        "Python",
        "Flask",
        "Multithreading",
        "Requests",
        "JavaScript",
        "HTML/CSS",
      ],
      img: "/openget.png",
      color: "#10b981",
      githubLink: "https://github.com/varruunnn/OpenGet",
    },
    {
      name: "Animated Videos Genrator",
      description:
        "This is a web-based application that allows users to generate dynamic, creative p5.js animations using natural language prompts. Built using React, Node.js, and Google's Gemini API, this tool transforms plain English into live-running code with a visual preview.",
      longDescription:
        "🚀 Built a full-stack web app that transforms natural language prompts into dynamic 2D animations using AI and p5.js.🤖 Integrated Google Gemini (LLM) to generate executable p5.js code from user input in real time.💡 Designed a modular React frontend with live canvas rendering, code preview, and HTML export features.🧩 Architected a Node.js + Express backend with robust API routing and environment-based Gemini key handling.🖼️ Developed a custom p5.js sandbox for securely executing and rendering generated code in-browser.⚡ Reduced manual animation prototyping time by automating creative sketch generation from simple text.",
      technologies: [
        "React",
        "Node.js",
        " Express",
        "p5.js",
        "Google Gemini",
        "TailwindCSS",
      ],
      img: "/animatedvideogenrator.png",
      color: "#4f46e5",
      demoLink: "https://animated-videos-genrator.vercel.app/",
      githubLink:
        "https://github.com/varruunnn/animated-videos-genrator/tree/main",
    },
    {
      name: "BigGameWars",
      description:
        "A MERN stack application facilitating team competitions for popular games like Valorant and BGMII. Features JWT authentication, user profiles, and admin communication. Deployed on GoDaddy with 1,000+ projected active users.",
      longDescription:
        "Developed a full-stack web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) to facilitate team-based competitions for popular games like Valorant and BGMII. Implemented JWT-based authentication for secure login and signup functionality. Built features for user profile management, allowing users to update their usernames and contact the admin team directly. Purchased and deployed the application on a custom domain using GoDaddy, ensuring a professional and reliable web presence. Estimated to onboard 1,000+ active users within the first phase of its full launch, showcasing the platform's scalability and appeal to the gaming community.",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "JWT"],
      img: "/biggamewars.png",
      color: "#4f46e5",
      demoLink: "https://www.biggamewars.com/",
      githubLink: "https://github.com/varruunnn/GamingArena",
    },
    {
      name: "RealTimeEditor",
      description:
        "A collaborative platform for frontend developers featuring live code editing, preview, design uploads, and real-time annotations using Socket.IO for synchronization.",
      longDescription:
        "A modern real-time platform tailored for frontend developers and interviewers. This tool enables seamless collaboration by providing features to upload designs, live code with peers, and even annotate designs in real-time. Room Creation & Joining: Create or join rooms to collaborate in real-time. Live Code Editor: Write HTML, CSS, and JS using a powerful CodeMirror-based editor. Live Preview: Instantly preview your code changes in a live-rendered iframe. Image Upload: Upload Figma files or other design mockups to collaborate visually. Real-Time Annotations: Annotate designs using a pencil tool or eraser for live feedback. Socket.IO Integration: Ensures all changes, including code, annotations, and image uploads, are synchronized in real-time.",
      technologies: [
        "React",
        "Node.js",
        "Socket.IO",
        "CodeMirror",
        "TailwindCSS",
      ],
      img: "/realtime.png",
      color: "#0ea5e9",
      demoLink: "https://real-time-editor-gilt.vercel.app",
      githubLink: "https://github.com/varruunnn/RealTimeEditor.git",
    },
    {
      name: "Weather App",
      description:
        "A React-based weather application using OpenWeatherMap API, featuring location search and responsive design with personal API key integration.",
      longDescription:
        "Designed and developed a real-time weather web application using React and integrated with OpenWeatherMap API. Utilized a reliable weather API to provide accurate, up-to-date weather information for any location. Implemented user-friendly features, including search functionality and responsive design for seamless access across devices. Optimized API integration by allowing users to generate and use their own API key for personalized weather data.",
      technologies: ["React", "Next.js", "ChakraUI", "API Integration"],
      img: "/weather.png",
      color: "#06b6d4",
      demoLink: "https://weather-app-tau-olive-72.vercel.app/",
      githubLink: "https://github.com/varruunnn/WeatherApp",
    },
    {
      name: "VideoPlayer",
      description:
        "A browser-based video player built with React and MongoDB that enables seamless upload and playback with persistent video metadata storage.",
      longDescription:
        "Developed a video player web application using React for the frontend and MongoDB for video metadata storage. Implemented seamless video upload and playback functionality, enabling users to watch videos directly in the browser without additional software. Ensured persistent video availability by securely storing video metadata in MongoDB, allowing access even after page reloads. Optimized for user convenience with a fully browser-based solution, eliminating the need for app installation.",
      technologies: ["React", "Express", "MongoDB", "CSS"],
      img: "/videoplay.png",
      color: "#ec4899",
      demoLink: "https://github.com/varruunnn/videoPlayer",
      githubLink: "https://github.com/varruunnn/videoPlayer",
    },
    {
      name: "Dynamic Event Calendar",
      description:
        "An interactive calendar app with drag-and-drop event management, filtering, conflict detection, and export capabilities in JSON and CSV formats.",
      longDescription:
        "A dynamic and interactive calendar app that allows users to add, edit, and manage events. The app includes features like event filtering, event export (JSON and CSV formats), and the ability to drag-and-drop events across different dates with time conflict checks. Add Events: Easily add events to specific dates, with customizable name, description, start time, end time, and category. Drag-and-Drop Events: Move events across different days and times with automatic conflict checks. Event Filtering: Filter events by name or description with a search bar to quickly find relevant events. Event Management: Edit event details, delete events, or add them back to any selected day. Export Events: Export the current month's events in either JSON or CSV format for easy data sharing. Responsive Design: Works seamlessly across devices with a mobile-friendly interface.",
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      img: "/calender.png",
      color: "#f59e0b",
      demoLink: "https://dynamic-event-calendar-application-psi.vercel.app/",
      githubLink:
        "https://github.com/varruunnn/Dynamic-Event-Calendar-Application.git",
    },
  ];
  // Add this function in your component
  const getIconPath = (skillName) => {
    const iconMap = {
      // Programming Languages
      JavaScript: "javascript/javascript-original.svg",
      HTML5: "html5/html5-original.svg",
      CSS: "css3/css3-original.svg",
      "C++": "cplusplus/cplusplus-original.svg",

      // Frontend
      "React.js": "react/react-original.svg",
      "Tailwind CSS": "tailwindcss/tailwindcss-plain.svg",
      "Framer Motion": "react/react-original.svg",

      // Backend
      "Node.js": "nodejs/nodejs-original.svg",
      Express: "express/express-original.svg",
      MongoDB: "mongodb/mongodb-original.svg",

      // Tools & Others
      "Git & GitHub": "git/git-original.svg",
      Render: "amazonwebservices/amazonwebservices-original.svg",
      Vercel: "nextjs/nextjs-original.svg",
      GoDaddy: "digitalocean/digitalocean-original.svg",

      // Currently Learning
      "Solidity & Thirdweb": "ethereum/ethereum-original.svg",
      Web3: "ethereum/ethereum-original.svg",
    };

    return iconMap[skillName] || "react/react-original.svg";
  };

  const navigationItems = [
    { id: "home", icon: UserIcon, label: "Home" },
    { id: "education", icon: BookOpenIcon, label: "Education" },
    { id: "experience", icon: BriefcaseIcon, label: "Experience" },
    { id: "skills", icon: Code2Icon, label: "Skills" },
    { id: "projects", icon: ExternalLinkIcon, label: "Projects" },
    { id: "contact", icon: SendIcon, label: "Contact" },
  ];

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleScroll = () => {
      const sections = [
        "home",
        "education",
        "experience",
        "skills",
        "projects",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Particle animation effect
  useEffect(() => {
    if (!showParticles) return;

    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(window.innerWidth / 10, 100);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`,
          vx: Math.random() * 0.5 - 0.25,
          vy: Math.random() * 0.5 - 0.25,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    createParticles();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [showParticles]);

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
      mixBlendMode: "difference",
    },
    button: {
      height: 32,
      width: 32,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#ff0088",
      mixBlendMode: "normal",
    },
  };
  const handleCompanyClick = () => {
    const companyLink = "https://ignicult.com/";
    window.open(companyLink, "_blank", "noopener noreferrer");
  };
  const handleIconClick = (type, href, message) => {
    if (type === "link") {
      window.open(href, "_blank", "noopener noreferrer");
    } else if (type === "mail") {
      const mailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${
        href.split(":")[1]
      }`;
      // window.open(mailLink, "_blank", "noopener noreferrer");
      alert("Email : " + href.split(":")[1]);
    } else if (type === "alert") {
      alert(message);
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen overflow-hidden text-white">
      {/* Particles background */}
      <canvas ref={particlesRef} className="absolute inset-0 z-0" />

      {/* Progress indicator */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          background: "linear-gradient(90deg, #ff0088, #3300ff)",
          zIndex: 100,
        }}
      />

      {/* Custom cursor */}
      <motion.div
        className="cursor hidden md:block bg-white w-8 h-8 rounded-full fixed top-0 left-0 pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "50px 50px",
          opacity: 0.1,
        }}
      />

      {/* Navigation */}
      <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-gray-900/60 backdrop-blur-lg rounded-full p-3 border border-gray-800"
        >
          <ul className="flex flex-col gap-6">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={buttonEnter}
                  onMouseLeave={buttonLeave}
                  className={`relative flex items-center justify-center p-2 rounded-full transition-colors ${
                    activeSection === item.id
                      ? "bg-pink-500 text-white"
                      : "bg-gray-800/50 text-gray-400 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="absolute left-full ml-4 whitespace-nowrap bg-gray-900/80 text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                </motion.button>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>

      {/* Mobile navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gray-900/80 backdrop-blur-lg p-3 border-t border-gray-800"
        >
          <ul className="flex justify-around">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex flex-col items-center p-2 ${
                    activeSection === item.id
                      ? "text-pink-500"
                      : "text-gray-400"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs mt-1">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 py-24"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-left ml-4 md:ml-20"
            >
              <motion.div
                className="overflow-hidden mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <motion.h2
                  className="text-2xl md:text-3xl font-light mb-4 text-pink-400"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Hello, I'm
                </motion.h2>
                <motion.h1
                  className="text-5xl md:text-8xl font-bold"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <span className="block bg-gradient-to-r from-blue-400 via-red-400 to-pink-400 text-transparent bg-clip-text uppercase">
                    Varun Choudhary
                  </span>
                </motion.h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-blue-500 to-pink-500 mb-6"
                />

                <motion.p
                  className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  <span className="text-2xl font-medium text-white">
                    Aspiring web developer
                  </span>{" "}
                  with a strong foundation in MERN stack currently enhancing
                  skills through hands-on projects. Passionate about creating
                  dynamic and user-friendly web applications, with a keen
                  interest in Web3 technologies.
                </motion.p>

                <motion.p
                  className="max-w-xl mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7, duration: 1 }}
                >
                  <a
                    href="https://hashnode.com/@varuunnn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-lg inline-flex items-center"
                    onMouseEnter={buttonEnter}
                    onMouseLeave={buttonLeave}
                  >
                    Check out my Blog on Hashnode
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </a>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9, duration: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={buttonEnter}
                    onMouseLeave={buttonLeave}
                    className="group relative px-8 py-4 bg-white text-black rounded-full text-lg font-medium overflow-hidden flex items-center"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      ↓ Download resume
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>

                  <motion.button
                    onClick={() => scrollToSection("contact")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={buttonEnter}
                    onMouseLeave={buttonLeave}
                    className="group relative px-8 py-4 border border-white rounded-full text-lg font-medium overflow-hidden text-white"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Contact Me
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-32 px-4" id="education">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2
                className="text-4xl md:text-6xl font-bold mb-4 ml-4 md:ml-20"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Education
              </h2>
              <div className="h-1 w-24 bg-blue-500 ml-4 md:ml-20"></div>
            </motion.div>

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
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800 group-hover:border-blue-500/50 transition-colors"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 mb-2">{edu.school}</p>
                    <p className="text-gray-400 mb-4">{edu.year}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-32 px-4" id="experience">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2
                className="text-4xl md:text-6xl font-bold mb-4 ml-4 md:ml-20"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Experience
              </h2>
              <div className="h-1 w-24 bg-pink-500 ml-4 md:ml-20"></div>
            </motion.div>

            <div className="space-y-8 px-4 md:px-20">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-pink-500/30 group"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 group-hover:scale-150 transition-transform" />
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800 group-hover:border-pink-500/50 transition-colors"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p
                      onClick={handleCompanyClick}
                      className="text-pink-400 cursor-pointer mb-2"
                    >
                      {exp.company}
                    </p>
                    <p className="text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-300 mb-4">
                      {exp.description}
                      <a href="https://ignicult.vercel.app/">Ignicult</a>
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          className="py-32 px-4 bg-gradient-to-b from-transparent to-gray-900/50"
          id="skills"
        >
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

            <div className="px-4 md:px-20">
              {skills.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-10"
                >
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {category.category}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {category.items.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                        }}
                        className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 
                         rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300"
                      >
                        <div className="w-14 h-14 mb-3 flex items-center justify-center">
                          {skill.icon}
                        </div>
                        <p className="text-center text-gray-300">
                          {skill.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32 px-4" id="projects">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2
                className="text-4xl md:text-6xl font-bold mb-4 ml-4 md:ml-20"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Projects
              </h2>
              <div className="h-1 w-24 bg-purple-500 ml-4 md:ml-20"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-purple-500/30 group"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                  <motion.div
                    whileHover={{ y: -10 }}
                    style={{ borderLeft: `4px solid ${project.color}` }}
                    className="bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 group-hover:border-purple-500/50 transition-colors h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                      <h3 className="absolute bottom-4 left-4 text-2xl font-bold">
                        {project.name}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-300 mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onMouseEnter={buttonEnter}
                          onMouseLeave={buttonLeave}
                          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center"
                        >
                          {index !== 0 && (
                            <div>
                              {" "}
                              Live Demo{" "}
                              <ExternalLinkIcon className="ml-2 h-4 w-4" />
                            </div>
                          )}
                        </motion.a>
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onMouseEnter={buttonEnter}
                          onMouseLeave={buttonLeave}
                          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center"
                        >
                          Code <GithubIcon className="ml-2 h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-32 px-4 bg-gradient-to-b from-transparent to-gray-900/30"
          id="contact"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2
                className="text-4xl md:text-6xl font-bold mb-4 ml-4 md:ml-20"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Let's Connect
              </h2>
              <div className="h-1 w-24 bg-pink-500 ml-4 md:ml-20"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800 hover:border-pink-500/50 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Get In Touch
                </h3>
                <p className="text-gray-300 mb-8">
                  Feel free to reach out if you're looking for a developer, have
                  a question, or just want to connect.
                </p>
                <div className="space-y-6">
                  {contactLinks.map((contact, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                        <contact.icon className="h-5 w-5" />
                      </div>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleIconClick(
                            contact.type,
                            contact.href,
                            contact.message
                          );
                        }}
                        className="text-gray-300 group-hover:text-white transition-colors"
                      >
                        {contact.label}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800 hover:border-pink-500/50 transition-colors"
              >
                <img
                  src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif"
                  alt="profile"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
