import TypeOut from "./TypeOut";

const Project = ({name, description, url}) => {
    return (
        <div className="project">
            <h3>{name}</h3>
            <p>
                <TypeOut inputString={description} />
            </p>
            <a href={url} target="_blank" rel="noreferrer">View Project</a>
          </div>
    );
};

export default Project;