import React from 'react';
import Project from '../components/Project';

const Projects = () => {

    const projects = [
        {
            name: "RPG-Dice-React",
            description: "An application for rolling polyhedral dice for tabletop rollplaying games.",
            url: "https://rpg-dice-react.netlify.app/",
        },
       {
            name: "Monster Finder",
            description: "An application for finding monsters to use in your Dungeons & Dragons 5th Edition roleplaying game.",
            url: "https://monsterfinder5e.netlify.app/",
        },
       {
            name: "Textmagotchi",
            description: "A Tamagotchi-like game for your browser!",
            url: "https://rancor38.github.io/textmagotchi/",
        },
        {
            name: "EZ-Notes",
            description: "An application for saving rich text notes online.",
            url: "https://ez-notes.netlify.app/",
        },
       {
            name: "DM's Guild Titles",
            description: "A series of booklets published on DM's Guild. (Unavailable on Mobile devices, instead search 'Zakariah')",
            url: "https://www.dmsguild.com/browse.php?author=Zakariah",
        },
       {
            name: "Borgbot",
            description: "A do-it-all discord bot that is far too powerful for how silly it is.",
            url: "https://github.com/Rancor38/borgbot/",
        },
       {
            name: "Simple-To-Do",
            description: "A simple rapidly fast to-do application that works without a database.",
            url: "https://rancor38.github.io/simple-to-do/",
        },
       
    ]

    return (
        <section className="projects">
            <h2>Projects</h2>
            {/* <Project name="" description="" url=""/> */}
            {projects.map((project) => <Project name={project.name} description={project.description} url={project.url} />
            )}
        </section>
    );
};

export default Projects;