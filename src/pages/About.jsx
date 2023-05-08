import Header from "../components/Header";

const About = () => {
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
                        The skills page lists the software and development tools that I use the most often, and while it's not a comprehensive list of every tool that I've used in my life, they are the spread of them that I feel confident in.
                    </li>
                    <li>
                        In projects, you'll find an array of published applications and other projects that I've been proud to work on.
                    </li>
                    <li>
                        Resume is a direct link to download my most recent (and hopefully up-to-date) resume.
                    </li>
                    <li>
                        And Contact Me has a few ways to reach out/find me online!
                    </li>
                </main>
            </section>
        </>
    );
};

export default About;