export const projects = [
  {
    title: "Physiotherapy Studio Information System",
    description:
      "A robust web application designed for the management of a physiotherapy studio. It includes functionalities for managing reservations, clients, services, and a blog. The dashboard also provides charts for decision-making, with Google Maps and reservation filtering for the public section.",
    technologies: {
      backend: [
        { name: "C#" },
        { name: "ASP.NET Core", icon: "SiDotnet" },
        {
          name: "Entity Framework Core",
        },
        { name: "MSSQL", icon: "DiMsqlServer" },
        { name: "JWT" },
        { name: "REST API" },
        { name: "Monolithic Architecture" },
      ],
      frontend: [
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "React", icon: "FaReact" },
        { name: "Tailwind CSS", icon: "SiTailwindcss" },
        { name: "TypeScript", icon: "SiTypescript" },
      ],
      deployment: [
        { name: "Vercel", icon: "SiVercel" },
        { name: "Microsoft Azure", icon: "SiMicrosoftazure" },
      ],
    },
    duration: "2023-2024",
    icon: "FaLaptopCode",
    image: "/projects/dp.png",
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
    technologies: {
      all: [
        { name: "React", icon: "SiReact" },
        { name: "TypeScript", icon: "SiTypescript" },
        { name: "Chakra UI", icon: "SiChakraui" },
      ],
    },
    duration: "2024",
    icon: "FaFilm",
    image: "/projects/dp.png",
    sourceCode: "https://github.com/MarekSutora/movie-database",
    liveDemo: "https://movie-database-roan.vercel.app",
  },
];
