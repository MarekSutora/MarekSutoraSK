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
      frontend: [
        { name: "React", icon: "FaReact" },
        { name: "TypeScript", icon: "SiTypescript" },
        { name: "Chakra UI", icon: "SiChakraui" },
        { name: "SCSS", icon: "FaSass" },
        { name: "React Query" },
      ],
      deployment: [{ name: "Vercel", icon: "SiVercel" }],
    },
    duration: "2024",
    icon: "FaFilm",
    image: "/projects/mvdb.png",
    sourceCode: "https://github.com/MarekSutora/movie-database",
    liveDemo: "https://movie-database-roan.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience. It features a dark theme, animations, and a responsive design.",
    technologies: {
      all: [
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "React", icon: "FaReact" },
        { name: "TypeScript", icon: "SiTypescript" },
        { name: "Tailwind CSS", icon: "SiTailwindcss" },
      ],
    },
    duration: "2024",
    icon: "FaUser",
    image: "/projects/prtfl.png",
    sourceCode: "https://github.com/MarekSutora/MarekSutoraSK",
    liveDemo: "https://www.mareksutora.sk",
  },
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
    fields: [
      { name: "Software Engineering" },
      { name: "Web Development" },
      { name: "Data Structures" },
      { name: "Algorithms" },
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
    fields: [
      { name: "Medical Data Analysis" },
      { name: "Bioinformatics" },
      { name: "Medical Imaging" },
      { name: "Data-driven Healthcare" },
    ],
  },
];

export const experience = [
  {
    position: "Backend Developer",
    company: "Codium",
    workType: "Full-time",
    duration: "September 2024 - Present",
    description:
      "I am working mainly on backend solutions designed to handle streams of data from betting providers, forming the backbone of the Doxxbet platform. This data stream provides all the necessary information for customers to be able to place bets. In addition to backend development, I also sometimes work on a backoffice web application that supports internal operations. The system is built using a microservices architecture with Kafka for data streaming, .NET Core and .NET Framework for backend development, and MSSQL for data storage. We use Dapper for database interactions, and our workflows are managed with TeamCity and GitLab for CI/CD. We also monitor and troubleshoot data pipelines with Elasticsearch, Kibana, and Redis.",
    technologies: [
      { name: "C#", icon: "SiCsharp" },
      { name: ".NET Core", icon: "SiDotnet" },
      { name: ".NET Framework", icon: "SiDotnet" },
      { name: "Kafka", icon: "SiApachekafka" },
      { name: "jQuery", icon: "SiJquery" },
      { name: "MSSQL", icon: "DiMsqlServer" },
      { name: "Dapper" },
      { name: "TeamCity", icon: "SiJetbrains" },
      { name: "GitLab", icon: "SiGitlab" },
      { name: "Elasticsearch", icon: "SiElasticsearch" },
      { name: "Kibana", icon: "SiKibana" },
      { name: "Redis", icon: "SiRedis" },
    ],
  },
  {
    position: "Fullstack Developer",
    company: "Descartes",
    workType: "Internship",
    duration: "July 2022 - June 2024",
    description:
      "Worked on a long-running telematics project, developing features for displaying real-time processed data on charts and interactive maps with markers and animations. I was responsible for maintaining backend microservices, implementing REST APIs, and optimizing database interactions using Dapper. Collaborated with a team of 8-11 members in an Agile environment with daily stand-ups and sprint planning, using Azure DevOps for project management.",
    technologies: [
      { name: "C#", icon: "SiCsharp" },
      { name: "ASP.NET Core MVC", icon: "SiDotnet" },
      { name: "Microservices" },
      { name: "REST API" },
      { name: "Dapper" },
      { name: "MSSQL", icon: "DiMsqlServer" },
      { name: "JavaScript", icon: "FaJs" },
      { name: "HTML", icon: "FaHtml5" },
      { name: "CSS", icon: "FaCss3" },
      { name: "MapLibre" },
      { name: "Azure DevOps", icon: "SiAzuredevops" },
      { name: "Agile", icon: "FaBalanceScale" },
      { name: "Scrum", icon: "FaTasks" },
    ],
  },
];
