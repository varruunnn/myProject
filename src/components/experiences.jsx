export const experiences = [
  {
    title: "Open Source Contributor – Music Blocks",
    company: "Sugar Labs",
    period: "2026",
    description: `Contributed merged pull requests focused on improving CI/CD reliability, testing infrastructure, and dependency maintenance across the Music Blocks project.
  Optimized Docker-based CI workflows, reducing image size from ∼2.42 GB to ∼411 MB, significantly improving build efficiency and pipeline execution speed.
  Expanded unit test coverage across multiple modules using JEST and JSDOM to improve code reliability and maintainability.
  Resolved complex CI/testing issues involving mocked Tone.js Promises, browser-environment simulation in JSDOM, and flaky automated test execution.
  Collaborated with maintainers to improve development workflows, debugging processes, and cross-environment compatibility.`,
    technologies: [
      "JavaScript",
      "Docker",
      "GitHub Actions",
      "JEST",
      "JSDOM",
      "CI/CD",
      "Tone.js",
      "Open Source",
      "Testing Infrastructure"
    ],
    links: []
  },
  {
    title: "Backend / AI Engineer",
    company: "LARC AI",
    period: "Nov-2025 – Jan-2026",
    description: `Working on LARC Router, an AI routing system that dynamically selects the best LLM for a user query based on configurable conditions such as cost, latency, model capability, and developer preferences.
Designed and implemented the core routing logic to evaluate multiple models and return optimal responses using developer-provided API keys.
Built scalable backend services to manage model orchestration, request flow, and response aggregation, ensuring reliability and performance.
Integrated LangGraph and LangChain to construct flexible, stateful AI workflows and decision graphs for intelligent model selection and execution.`,
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "LLMs",
      "FastAPI",
      "REST APIs",
      "AI Routing",
      "Distributed Systems"
    ],
    links: []
  },
  {
    title: "Full Stack Developer Intern",
    company: "Ignicult",
    period: "Feb-2025-April-2025",
    description: `Designed and implemented scalable web applications for a Web3-integrated gaming platform. 
Built two frontend pages:
- Main Platform Page: Used Thirdweb SDK for wallet connectivity and Web3 interactions. Integrated backend APIs for dynamic data handling.
- Analytics Dashboard: Displayed key metrics using API data from the backend to monitor platform performance.`,
    technologies: ["React", "Node.js", "ThirdWeb SDK", "TS", "REST APIs"],
    links: [
      { label: "Main Platform Page", url: "https://ignicult.vercel.app/" },
      { label: "Analytics Dashboard", url: "https://ignicult-inside-i3l5.vercel.app/" }
    ]
  }
];