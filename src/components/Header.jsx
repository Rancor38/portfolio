import { useEffect, useState } from "react";
import TypeOut from "./TypeOut"; import profileImage from '../images/me.png'; // Import the profile image

const Header = () => {

    const [randomString, setRandomString] = useState(null)

    //A function that selects a random string from an array of strings
    function selectRandomString(stringsArray) {
        const randomIndex = Math.floor(Math.random() * stringsArray.length);
        return stringsArray[randomIndex];
    }
    const stringsArray = ['Writer, Software Developer, and Drinker of Coffee', 'Software Developer, Writer, and Expert on Life', 'Writer, Software Developer, and Game Master', 'Software Developer, Writer, and Drinker of Coffee', 'Software Developer, Writer, and Drinker of Coffee', 'Writer, Software Developer, and Drinker of Coffee',];

    useEffect(() => {
        setRandomString(selectRandomString(stringsArray))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <header>
            <h1>
                <TypeOut inputString="Zakariah's Portfolio" time="300" typeSpeed={100} />
            </h1>
            <div className='image-container'>
                <img className='glow' src={profileImage} alt="Zakariah's profile" />
                <div className="glow"></div>
            </div>
            <p>
                <TypeOut inputString={randomString} time="3000" typeSpeed={100} />
            </p>
        </header>
    );
};

export default Header;