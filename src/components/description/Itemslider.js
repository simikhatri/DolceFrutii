
import React from 'react';
import pic1 from '../../Assets/images/Desert Ruby.jpeg'
import pic2 from '../../Assets/images/Golden Lady.jpeg'
import pic3 from '../../Assets/images/keitt.jpeg'
import pic4 from '../../Assets/images/valencia pride.jpg'
import ImageGallery from "react-image-gallery";
import './itemSlider.css'
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: pic1,
        thumbnail: pic1,
    },
    {
        original: pic2,
        thumbnail: pic2,
    },
    {
        original: pic3,
        thumbnail: pic3,
    },
    {
        original: pic4,
        thumbnail: pic4,
    },
];

const Itemslider = () => {

    return (
        <>
            <div className='custom-image-gallery'>
                <ImageGallery items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    thumbnailWidth={40}
                    thumbnailHeight={40}
                    showNav={false}
                    is />
            </div>
        </>
    )
}

export default Itemslider

