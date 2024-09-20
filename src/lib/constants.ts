import { FaDatabase, FaLaptopCode, FaFilm } from "react-icons/fa";
import {
  SiCsharp,
  SiDotnet,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiChakraui
} from "react-icons/si";
import React from "react";

export const projects = [
  {
    title: "Physiotherapy Studio Information System",
    description:
      "A robust web application designed for the management of a physiotherapy studio. It includes functionalities for managing reservations, clients, services, and a blog. The dashboard also provides charts for decision-making, with Google Maps and reservation filtering for the public section.",
    backend: [
      { name: "C#", icon: React.createElement(SiCsharp) },
      { name: ".NET Core", icon: React.createElement(SiDotnet) },
      { name: "Entity Framework Core", icon: React.createElement(FaDatabase) },
    ],
    frontend: [
      { name: "React", icon: React.createElement(SiReact) },
      { name: "Next.js", icon: React.createElement(SiNextdotjs) },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss) },
      { name: "TypeScript", icon: React.createElement(SiTypescript) },
    ],
    duration: "2023-2024",
    icon: React.createElement(FaLaptopCode),
    image: "https://via.placeholder.com/300x200", // Placeholder image
    sourceCode: {
      backend: "https://github.com/MarekSutora/physio-backend",
      frontend: "https://github.com/MarekSutora/physio-frontend",
    },
    liveDemo: "https://www.mareksutora.online",
  },
  {
    title: "Movie Search Web Application",
    description:
      "A movie database application where users can search for movies, view details, and manage a list of favorites. It integrates with the OMDB API and features infinite scrolling, responsive design, and local storage for favorite movie management.",
    technologies: [
      { name: "React", icon: React.createElement(SiReact) },
      { name: "TypeScript", icon: React.createElement(SiTypescript) },
      { name: "Chakra UI", icon: React.createElement(SiChakraui) },
    ],
    duration: "2024",
    icon: React.createElement(FaFilm),
    image: "https://via.placeholder.com/300x200", // Placeholder image
    sourceCode: "https://github.com/MarekSutora/movie-database",
    liveDemo: "https://movie-database-roan.vercel.app",
  },
];
