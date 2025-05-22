// This file dynamically imports and combines data from your portfolio components
// to create an up-to-date resume object

// Base resume data
const resumeData = {
    name: "Zakariah O'Mara-Mezzano",
    title: "Software Engineer",
    contact: {
        phone: "424-666-0598",
        email: "zak.text@gmail.com",
        linkedin: "https://linkedin.com/in/zakariah-om",
        github: "https://github.com/rancor38",
        portfolio: "https://zakariah.xyz/",
    },
    summary: `As a versatile and dedicated professional, I bring expertise in web development, team-building, and communication. As a full stack engineer, I thrive on implementing innovative systems, and staying at the forefront of industry trends. With a track record of unlocking hidden potential, creating genuine connections, and delivering results, I am excited to contribute my expertise as a valued team member.`,
    education: [
        { name: "AWS Solutions Architect Assoc.", year: 2024 },
        { name: "AWS Cloud Practitioner", year: 2023 },
        { name: "General Assembly", year: 2022 },
        { name: "Fullerton College", years: "2014 – 2017" },
    ],
    expertise: {
        professional: [
            "Adaptability",
            "Collaboration",
            "People Skills",
            "Problem Solving",
            "Time Management",
        ],
        technical: [
            "Data Collection & Analysis",
            "Microsoft 365",
            "Google Workspace",
            "Slack",
            "Jira",
            "Notion",
        ],
    },
    technicalSkills: {
        languages: [
            "Bash",
            "JavaScript",
            "TypeScript",
            "Python",
            "CSS",
            "SQL",
            "Git",
            "HTML",
        ],
        tools: [
            "React",
            "Django",
            "AWS CDK",
            "Express",
            "Electron",
            "Amazon S3",
            "MongoDB",
            "DynamoDB",
            "Timestream",
            "RDS",
            "PostgreSQL",
            "GitHub",
            "BitBucket",
            "CodeCommit",
            "Visual Studio Code",
        ],
    },
    professionalExperience: [
        {
            title: "Software Engineer",
            company: "Milvian Group",
            location: "Los Angeles, CA",
            years: "2024 – Present",
            achievements: [
                "Served as a solutions architect and adviser to peers.",
                "Worked on the LoRaWAN Platform CI/CD Pipeline and BMS Monitoring Suite for Amazon OpsTech.",
                "Contributed to the Wirefree, Hardware, and Device Health Apps.",
                "Architected Aqueduct, the company's flagship product.",
            ],
        },
        {
            title: "Software Engineer",
            company: "TensorIoT",
            location: "Irvine, CA",
            years: "2023 – 2024",
            achievements: [
                "Achieved certification as an AWS Solutions Architect Associate.",
                "Led development of internal solutions pipelines.",
                "Collaborated with Amazon Business Management Solutions to revamp sensor infrastructure and interfaces.",
            ],
        },
        {
            title: "Instructional Associate",
            company: "General Assembly",
            location: "Los Angeles, CA",
            years: "2022 – 2024",
            achievements: [
                "Spearheaded a blended learning model.",
                "Administered instructional programs and assessed performance.",
                "Designed and built web-based demonstration apps.",
            ],
        },
        {
            title: "Shift Manager",
            company: "Starbucks",
            location: "Anaheim, CA",
            years: "2017 – 2022",
            achievements: [
                "Led team to a 6% revenue increase.",
                "Trained new partners into managers.",
                "Streamlined operations and optimized efficiency.",
            ],
        },
    ],
    projects: [
        {
            name: "Borgbot",
            type: "Solo",
            github: "https://github.com/Rancor38/borgbot/",
            description: [
                "Discord bot with AI, currency conversion, food commands, and humor.",
                "Used OpenAI's LLMs for intelligent interactions.",
            ],
        },
        {
            name: "Monster Finder",
            type: "Solo",
            github: "https://github.com/Rancor38/monster",
            live: "https://monster-finders.netlify.app/",
            description: [
                "Search tool for D&D 5e monsters using Open5e API.",
                "Built with React, optimized state management.",
            ],
        },
        {
            name: "1-Day Textmagotchi",
            type: "Solo",
            github: "https://github.com/Rancor38/textmagotchi",
            live: "https://rancor38.github.io/textmagotchi/",
            description: [
                "Virtual pet game created in one day with interactive gameplay.",
            ],
        },
        {
            name: "RPG Dice-React",
            type: "Group",
            github: "https://github.com/Rancor38/rpg-dice-react/",
            live: "https://rpg-dice-react.netlify.app/",
            description: [
                "React-based dice roller for tabletop games.",
                "Collaborative project refactored from Django.",
            ],
        },
        {
            name: "Simple-To-Do",
            type: "Solo",
            github: "https://github.com/Rancor38/simple-to-do",
            live: "https://rancor38.github.io/simple-to-do/",
            description: [
                "To-Do list with task management and export features.",
                "Built with HTML, CSS, JavaScript.",
            ],
        },
    ],
    interests: [
        "Dungeons & Dragons",
        "Game Design",
        "Storytelling",
        "Building Computers",
        "Specialty Coffee",
        "3D Printing",
    ],
}

// Function to dynamically merge in project data when Projects component exists
const updateProjectsFromPortfolio = (resumeData) => {
    try {
        // Import projects data from local variables
        // These would normally be imported from projectsData.js
        const featuredProjects = [
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
        ]

        if (featuredProjects) {
            // Take the top 5 projects from the Projects component
            const topProjects = featuredProjects.slice(0, 5).map((project) => ({
                name: project.title,
                type: project.categories.includes("enterprise")
                    ? "Enterprise"
                    : "Personal",
                github: project.repoUrl,
                live: project.liveUrl,
                description: [project.description].concat(
                    project.highlights || []
                ),
            }))

            // Update resume projects with data from Projects component
            resumeData.projects = topProjects
        }

        return resumeData
    } catch (error) {
        console.warn(
            "Couldn't import projects data, using static data instead:",
            error
        )
        return resumeData
    }
}

// Function to dynamically merge in skills data when Skills component exists
const updateSkillsFromPortfolio = (resumeData) => {
    try {
        // Import skills data - hardcoded for reliability
        const languagesSkills = [
            { name: "JavaScript", category: "language" },
            { name: "TypeScript", category: "language" },
            { name: "HTML5", category: "language" },
            { name: "CSS3", category: "language" },
            { name: "Python", category: "language" },
            { name: "PHP", category: "language" },
            { name: "SQL", category: "language" },
            { name: "Bash", category: "language" },
        ]

        const frameworksAndTools = [
            { name: "React", category: "framework" },
            { name: "Node.js", category: "framework" },
            { name: "Express", category: "framework" },
            { name: "Next.js", category: "framework" },
            { name: "Django", category: "framework" },
            { name: "Flask", category: "framework" },
            { name: "Tailwind CSS", category: "framework" },
            { name: "AWS CDK", category: "tool" },
            { name: "MongoDB", category: "database" },
            { name: "PostgreSQL", category: "database" },
            { name: "Amazon RDS", category: "database" },
            { name: "Amazon DynamoDB", category: "database" },
            { name: "Git", category: "tool" },
            { name: "GitHub", category: "tool" },
            { name: "VS Code", category: "tool" },
            { name: "Amazon S3", category: "aws" },
            { name: "AWS Lambda", category: "aws" },
            { name: "CloudWatch", category: "aws" },
            { name: "CloudFormation", category: "aws" },
        ]

        if (languagesSkills && frameworksAndTools) {
            // Extract language names
            const languages = languagesSkills.map((skill) => skill.name).sort()

            // Extract tools and frameworks names
            const tools = frameworksAndTools.map((skill) => skill.name).sort()

            // Update resume data with skills from Skills component
            resumeData.technicalSkills = {
                languages,
                tools,
            }
        }

        return resumeData
    } catch (error) {
        console.warn(
            "Couldn't import skills data, using static data instead:",
            error
        )
        return resumeData
    }
}

// Function to update contact info from Contact component
const updateContactFromPortfolio = (resumeData) => {
    try {
        // Hard-code contact data for reliability
        const contactItems = [
            {
                label: "Name",
                content: "Zakariah J Hallow",
                icon: null,
            },
            {
                label: "Email",
                content: "zakariahjhallow@outlook.com",
                icon: null,
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/zakariah-om",
                content: "linkedin.com/in/zakariah-om",
                icon: "/socials/iconmonstr-linkedin-3-240.png",
            },
            {
                label: "GitHub",
                url: "https://github.com/Rancor38",
                content: "github.com/Rancor38",
                icon: "/socials/iconmonstr-github-1-240.png",
            },
        ]

        // Get the email from contactItems
        const emailItem = contactItems.find((item) => item.label === "Email")
        if (emailItem && emailItem.content) {
            resumeData.contact = {
                ...resumeData.contact,
                email: emailItem.content,
            }
        }

        // Get other contact info from contactItems
        const linkedinItem = contactItems.find(
            (item) => item.label === "LinkedIn"
        )
        if (linkedinItem && linkedinItem.url) {
            resumeData.contact.linkedin = linkedinItem.url
        }

        const githubItem = contactItems.find((item) => item.label === "GitHub")
        if (githubItem && githubItem.url) {
            resumeData.contact.github = githubItem.url
        }

        return resumeData
    } catch (error) {
        console.warn(
            "Couldn't import contact data, using static data instead:",
            error
        )
        return resumeData
    }
}

// Combine all data for the most up-to-date resume
const dynamicResumeData = updateContactFromPortfolio(
    updateSkillsFromPortfolio(updateProjectsFromPortfolio(resumeData))
)

export default dynamicResumeData
