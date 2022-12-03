import {useState, useEffect} from 'react';
import { Carousel } from 'react-bootstrap/';
import './styles.css';

const BootstrapSlideshow = () => {

    const [images, setImages] = useState(null)

    const fetchImages = () => {
        const images = "image-data.json"

        fetch(images)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setImages(data)
            })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchImages()
    }, [])

    const [index, setIndex] = useState(0)
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
        console.log(index)
    }


    if (!images) {
        return <></>
    } else {
        const eachItem = images.list.map((element, imageIndex) => 
            <Carousel.Item> 
                <img
                    className='dblock w-100'
                    src={images.list[imageIndex].image}
                    alt={imageIndex}
                    />
                {/* <Carousel.Caption>
                        <h1>
                            {images.list[imageIndex].name}
                        </h1>
                </Carousel.Caption> */}
            </Carousel.Item>
            // <img
            //     className='dblock w-100'
            //     src={images.list[image].image}
            //     alt='One'
            // />
        )
        
        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
            {eachItem}
        </Carousel>
    );
}
};

export default BootstrapSlideshow;