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
        { name: "React", icon: "FaReact" },
        { name: "TypeScript", icon: "SiTypescript" },
        { name: "Chakra UI", icon: "SiChakraui" },
      ],
    },
    duration: "2024",
    icon: "FaFilm",
    image: "/projects/mvdb.png",
    sourceCode: "https://github.com/MarekSutora/movie-database",
    liveDemo: "https://movie-database-roan.vercel.app",
  },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "A personal portfolio website showcasing my projects, skills, and experience. It features a dark theme, animations, and a responsive design.",
  //   technologies: {
  //     all: [
  //       { name: "Next.js", icon: "SiNextdotjs" },
  //       { name: "React", icon: "FaReact" },
  //       { name: "TypeScript", icon: "SiTypescript" },
  //       { name: "Tailwind CSS", icon: "SiTailwindcss" },
  //     ],
  //   },
  //   duration: "2024",
  //   icon: "FaUser",
  //   image: "/projects/prtfl.png",
  //   sourceCode: "https://github.com/MarekSutora/MarekSutoraSK",
  //   liveDemo: "https://www.mareksutora.sk",
  // },
];

export const education = [
  {
    university: "University of Žilina",
    faculty: "Faculty of Management Science and Informatics",
    duration: "2018 - 2021",
    degree: "Bachelor's degree in Informatics",
    description:
      "The Bachelor's program in Informatics provided me with a solid foundation in programming, algorithms, and data structures. During this period, I developed multiple projects in web development and software engineering.",
    technologies: [
      { name: "C++", icon: "FaCode" },
      { name: "Java", icon: "FaJava" },
      { name: "HTML/CSS", icon: "FaHtml5" },
      { name: "JavaScript", icon: "FaJsSquare" },
    ],
  },
  {
    university: "University of Žilina",
    faculty: "Faculty of Management Science and Informatics",
    duration: "2021 - 2023",
    degree: "Master's degree in Biomedical Informatics",
    description:
      "The Master's program in Biomedical Informatics allowed me to specialize in medical data analysis, machine learning, and data-driven healthcare applications. I worked on several research projects involving medical imaging and bioinformatics.",
    technologies: [
      { name: "Python", icon: "FaPython" },
      { name: "R", icon: "SiRstudio" },
      { name: "Machine Learning", icon: "FaRobot" },
      { name: "SQL", icon: "FaDatabase" },
    ],
  },
];
