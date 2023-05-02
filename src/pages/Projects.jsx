import React from 'react';
import Project from '../components/Project';

const Projects = () => {

    const projects = [
        {
            name: "RPG-Dice-React",
            description: "An application for rolling polyhedral dice for tabletop rollplaying games.",
            url: "https://github.com/Rancor38/rpg-dice-react",
        },
       {
            name: "Monster Finder",
            description: "An application for finding monsters to use in your Dungeons & Dragons 5th Edition roleplaying game.",
            url: "https://github.com/Rancor38/monster",
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