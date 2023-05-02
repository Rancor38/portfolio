import React from 'react';

const Project = (props) => {
    return (
        <div className="project">
            <h3>{props.name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat justo ac tortor sagittis pharetra. Nullam fringilla justo id neque hendrerit, vel scelerisque nunc interdum.</p>
            <a href="#">View Project</a>
          </div>
    );
};

export default Project;