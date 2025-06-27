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
  SiDrizzle
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { SiFramer, SiDjango, SiFlask, SiRender, SiRailway, SiVercel, SiGodaddy, SiSolidity, SiWeb3Dotjs, SiApachekafka } from "react-icons/si";
import { DiRedis } from "react-icons/di";
export const skills = [
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
        { name: "Drizzle", icon: <SiDrizzle size={40} color="#8BC68D" /> },
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