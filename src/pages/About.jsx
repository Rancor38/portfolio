
import { Link } from 'react-router-dom';
import Header from "../components/Header";

const About = () => {

    function handleDownload() {
        // Path to the file to be downloaded
        const fileURL = process.env.PUBLIC_URL + "/resumePDF/Zakariah_Software_Developer_Resume.pdf";
          // Create a temporary anchor element
        const downloadLink = document.createElement("a");
          // Set the href attribute to the file's URL
        downloadLink.href = fileURL;
          // Set the download attribute to the file's name
        downloadLink.download = "Zakariah's_Resume.pdf";
          // Append the anchor element to the document body
        document.body.appendChild(downloadLink);
          // Click the download link to start the download
        downloadLink.click();
          // Remove the temporary anchor element
        document.body.removeChild(downloadLink);
        // Open the downloaded file in a new window
        window.open(fileURL, "_blank");
      }

    return (
        <>
            <Header />
            <section className="about-me">
                <h2>About Me</h2>
                <main>
                    <li>
                        Hello, welcome to my website! This site is a showcase of a few of the things that I do for work. The menu details a few different pages to look over.
                    </li>
                    <li>
                        The <Link to="/skills">skills</Link> page lists the software and development tools that I use the most often, and while it's not a comprehensive list of every tool that I've used in my life, they are the spread of them that I feel confident in.
                    </li>
                    <li>
                        In <Link to="/projects">projects</Link>, you'll find an array of published applications and other projects that I've been proud to work on.
                    </li>
                    <li>
                        <a href='/' onClick={handleDownload}>Resume </a>is a direct link to download my most recent (and hopefully up-to-date) resume.
                    </li>
                    <li>
                        And <Link to="/contact">Contact Me</Link> has a few ways to reach out/find me online!
                    </li>
                </main>
            </section>
        </>
    );
};

export default About;