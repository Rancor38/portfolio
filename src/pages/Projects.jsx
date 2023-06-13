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
            name: "DM's Guild Titles",
            description: "A series of booklets published on DM's Guild. (Unavailable on Mobile devices, instead search 'Zakariah')",
            url: "https://www.dmsguild.com/browse.php?author=Zakariah",
        },
       {
            name: "Simple-To-Do",
            description: "A simple rapidly fast to-do application that works without a database.",
            url: "https://rancor38.github.io/simple-to-do/",
        },
       {
            name: "EZ-Notes",
            description: "An application for saving simple text notes online.",
            url: "https://ez-notes.netlify.app/",
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