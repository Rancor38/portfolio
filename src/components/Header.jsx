import TypeOut from "./TypeOut";

const Header = () => {

    return (
        <header>
            <h1>
                <TypeOut inputString="Zakariah's Portfolio" time="300" typeSpeed={100} />
            </h1>
            <div className='image-container'>
                <img className='glow' src="https://i.imgur.com/u8WIoGl.png" alt="z-logo" />
                <div className="glow"></div>
            </div>
            <p>
                <TypeOut inputString="Writer, Software Developer, and Drinker of Coffee" time="3000" typeSpeed={100} />
            </p>
        </header>
    );
};

export default Header;