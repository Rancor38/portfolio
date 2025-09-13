// Export project data to be used in Resume component
// This file extracts the project information from the Projects component

export const featuredProjects = [
    {
        title: "Atria",
        description:
            "Proposed and spearheaded development of Milvian Group's extensible hardware platform for install, monitoring, and provisioning LoRaWAN devices, both an internal and customer-facing solution for Amazon",
        highlights: [
            "Unified platform for hardware installers, device provisioners, and site administrators",
            "Migrated and expanded Install App and Device Health App functionality",
            "Integrated site survey solutions and device dashboards",
            "Designed comprehensive device provisioning system",
        ],
        categories: [
            "web",
            "full-stack",
            "enterprise",
            "architecture",
            "hardware",
            "iot",
            "platform",
        ],
        repoUrl: "https://github.com/private-repo",
        liveUrl: "https://www.atria.milvian-amzl.com/",
    },
    {
        title: "Aqueduct",
        description:
            "Architected and led development of Milvian Group's flagship web application for complex data flow management and visualization",
        highlights: [
            "Designed system architecture and data models",
            "Led cross-functional development team",
            "Implemented advanced data visualization features",
        ],
        categories: [
            "web",
            "full-stack",
            "frontend",
            "enterprise",
            "architecture",
        ],
        repoUrl: "https://github.com/private-repo",
        liveUrl: "https://milvian.group/aqueduct/",
    },
    {
        title: "LoRaWAN Platform CI/CD Pipeline",
        description:
            "Architected and implemented a multi-account AWS CDK infrastructure-as-code solution for Amazon's LoRaWAN IoT platform",
        highlights: [
            "Established automated CI/CD pipelines with approval gates",
            "Seamlessly deploy across development and production environments",
        ],
        categories: [
            "backend",
            "aws",
            "iot",
            "cdk",
            "enterprise",
            "cicd",
            "cloud",
        ],
        repoUrl: "https://github.com/private-repo",
        liveUrl: "https://www.amazon.com/b2b",
    },
    {
        title: "BMS Monitoring Suite",
        description:
            "Led development of comprehensive Building Management System monitoring for Amazon OpsTech support buildings",
        highlights: [
            "Created enterprise solutions for facility infrastructure monitoring",
            "Improved operational efficiency",
            "Enabled proactive maintenance",
        ],
        categories: [
            "backend",
            "utility",
            "aws",
            "iot",
            "data",
            "cdk",
            "enterprise",
        ],
        repoUrl: "https://github.com/private-repo",
        liveUrl: "https://www.amazon.com/b2b",
    },
    {
        title: "Hardware Installation App",
        description:
            "A mobile-optimized web application deployed on AWS for field technicians",
        highlights: [
            "Created app for documenting hardware installations with photo evidence",
            "Implemented offline support and robust cloud storage",
            "Built with AWS serverless architecture",
        ],
        categories: [
            "web",
            "full-stack",
            "backend",
            "utility",
            "mobile",
            "aws",
            "enterprise",
        ],
        repoUrl: "https://github.com/private-repo",
        liveUrl: "https://www.amazon.com/b2b",
    },
    {
        title: "I Must Kill - Game Reference Website",
        description:
            "Designed and built a comprehensive digital reference website for my original tabletop role-playing game 'I Must Kill'",
        highlights: [
            "Created dark fantasy RPG with unique combat and magic systems",
            "Built interactive character sheets and equipment generators",
            "Implemented real-time initiative tracker with Liveshare functionality",
            "Developed searchable databases for powers, equipment, and monsters",
            "Designed responsive UI with dark/light theme support",
        ],
        categories: [
            "web",
            "frontend",
            "game",
            "design",
            "react",
            "full-stack",
        ],
        repoUrl: "https://github.com/Rancor38/imustkill-website",
        liveUrl: "https://imustkill.com/",
    },
    {
        title: "Borgbot",
        description:
            "A do-it-all discord bot with AI, currency conversion, food commands, and humor",
        highlights: ["Used OpenAI's LLMs for intelligent interactions"],
        categories: ["utility", "backend"],
        repoUrl: "https://github.com/Rancor38/borgbot/",
        liveUrl: null,
    },
    {
        title: "Monster Finder",
        description: "Search tool for D&D 5e monsters using Open5e API",
        highlights: ["Built with React, optimized state management"],
        categories: ["web", "database"],
        repoUrl: "https://github.com/Rancor38/monster",
        liveUrl: "https://monsterfinder5e.netlify.app/",
    },
    {
        title: "Textmagotchi",
        description:
            "Virtual pet game created in one day with interactive gameplay",
        highlights: [],
        categories: ["game", "frontend"],
        repoUrl: "https://github.com/Rancor38/textmagotchi",
        liveUrl: "https://rancor38.github.io/textmagotchi/",
    },
    {
        title: "RPG-Dice-React",
        description: "React-based dice roller for tabletop games",
        highlights: ["Collaborative project refactored from Django"],
        categories: ["web", "frontend"],
        repoUrl: "https://github.com/Rancor38/rpg-dice-react/",
        liveUrl: "https://rpg-dice-react.netlify.app/",
    },
    {
        title: "Simple-To-Do",
        description: "To-Do list with task management and export features",
        highlights: ["Built with HTML, CSS, JavaScript"],
        categories: ["web", "frontend", "utility"],
        repoUrl: "https://github.com/Rancor38/simple-to-do",
        liveUrl: "https://rancor38.github.io/simple-to-do/",
    },
]

export default featuredProjects
