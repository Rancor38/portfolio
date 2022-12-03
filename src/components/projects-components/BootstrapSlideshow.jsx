import {useState} from 'react';
import { Carousel } from 'react-bootstrap/Carousel';

const BootstrapSlideshow = () => {
    const [index, setIndex] = useState(0)
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    return (
        <h1>My Sanity</h1>
    );
};

export default BootstrapSlideshow;