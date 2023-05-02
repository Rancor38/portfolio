import TypeOut from "../context/TypeOut";

const Header = () => {

    return (
        <header>
            <h1>
            <TypeOut inputString="My Portfolio" />
            </h1>
            <div className='image-container'>
                <img className='glow' src="https://i.imgur.com/u8WIoGl.png" alt="z-logo" />
                <div class="glow"></div>
            </div>
          <p>Software Developer</p>
        </header>
    );
};

export default Header;