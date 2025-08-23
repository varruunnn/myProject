export const projects = [
  {
    name: "ClassSync",
    description:
      "An AI-powered school management system built with MERN, Redis, and Google Gemini, designed to streamline educational administration while enhancing student, teacher, and parent engagement.",
    longDescription:
      "📚 ClassSync is a modern, full-featured school management platform built with the MERN stack, Redis, and Google Gemini AI.⚡ It enables seamless management of students, teachers, and administrative tasks while fostering a collaborative learning environment.🤖 Integrated advanced AI features, including a 'Chat with PDF' tool, allowing students to instantly resolve doubts from uploaded study materials.💬 Facilitates direct communication between students, teachers, and peers through an interactive portal.📊 Empowers parents with a dedicated dashboard providing real-time insights into their child's academic performance and progress.🔒 Designed with a secure, scalable architecture to handle growing school needs while ensuring data privacy and compliance.",
    technologies: [
      "MongoDB",
      "Express",
      "TypeScript",
      "React",
      "Node.js",
      "Redis",
      "Google Gemini",
      "TailwindCSS",
    ],
    img: "/classSync.png",
    color: "#16a34a",
    demoLink: "https://class-sync-five.vercel.app/",
    githubLink: "https://github.com/varruunnn/ClassSync",
    featured: true,
  },
  {
    name: "Animated AI Videos Genrator",
    description:
      "This is a web-based application that allows users to generate dynamic, creative p5.js animations using natural language prompts. Built using React, Node.js, and Google's Gemini API, this tool transforms plain English into live-running code with a visual preview.",
    longDescription:
      "🚀 Built a full-stack web app that transforms natural language prompts into dynamic 2D animations using AI and p5.js.🤖 Integrated Google Gemini (LLM) to generate executable p5.js code from user input in real time.💡 Designed a modular React frontend with live canvas rendering, code preview, and HTML export features.🧩 Architected a Node.js + Express backend with robust API routing and environment-based Gemini key handling.🖼️ Developed a custom p5.js sandbox for securely executing and rendering generated code in-browser.⚡ Reduced manual animation prototyping time by automating creative sketch generation from simple text.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "p5.js",
      "Google Gemini",
      "TailwindCSS",
    ],
    img: "/animatedvideogenrator1.png",
    color: "#4f46e5",
    demoLink: "https://animated-videos-genrator.vercel.app/",
    githubLink:
      "https://github.com/varruunnn/animated-videos-genrator/tree/main",
    featured: true,
  },
  {
    name: "Dodge Master",
    description:
      "A real-time multiplayer survival game where players dodge falling blocks and collect power-ups to outlast their opponents.",
    longDescription:
      "Dodge Master is a competitive real-time multiplayer browser game built using WebSockets and React. Players can create or join private rooms and face off in a survival arena by dodging falling obstacles while collecting power-ups like Shield, Freeze, and Slow. The game includes a dynamic HUD, real-time score tracking, responsive canvas rendering, and clean animations. All game logic, state syncing, and room management are handled through a robust Socket.IO and Node.js backend.",
    technologies: [
      "React",
      "Node.js",
      "Socket.IO",
      "Vite",
      "TailwindCSS",
      "Canvas API",
    ],
    img: "/DodgeGame.png",
    color: "#a855f7",
    demoLink: "https://dodge-game-beta.vercel.app/",
    githubLink: "https://github.com/varruunnn/DodgeGame",
    featured: true,
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
    featured: true,
  },
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
    featured: true,
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
    featured: true,
  },
  {
    name: "VideoPlayer",
    description:
      "A browser-based video player built with React and MongoDB that enables seamless upload and playback with persistent video metadata storage.",
    longDescription:
      "Developed a video player web application using React for the frontend and MongoDB for video metadata storage. Implemented seamless video upload and playbook functionality, enabling users to watch videos directly in the browser without additional software. Ensured persistent video availability by securely storing video metadata in MongoDB, allowing access even after page reloads. Optimized for user convenience with a fully browser-based solution, eliminating the need for app installation.",
    technologies: ["React", "Express", "MongoDB", "CSS"],
    img: "/videoplay.png",
    color: "#ec4899",
    demoLink: "https://github.com/varruunnn/videoPlayer",
    githubLink: "https://github.com/varruunnn/videoPlayer",
    featured: false,
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
    featured: false,
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
    featured: false,
  },
];
