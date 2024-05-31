import React, { useState } from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { data_images } from '../../../assets/data/dataslider';

import './sectionthree.css'

export default function SectionThree() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [animationClass, setAnimationClass] = useState('');

    const handleThumbnailClick = (index: number) => {
        const newSelectedImage = (index) % data_images.length;
        setSelectedImage(newSelectedImage);
    };

    const handlePrevClick = () => {
        setSelectedImage((prev) => (prev === 0 ? data_images.length - 1 : prev - 1));
        setAnimationClass('prev-animation');
    };

    const handleNextClick = () => {
        setSelectedImage((prev) => (prev === data_images.length - 1 ? 0 : prev + 1));
        setAnimationClass('next-animation');
    };

    const handleAnimationEnd = () => {
        setAnimationClass('');
    };

    const visibleThumbnails = Array.from({ length: 3 }).map((_, index) => {
        const thumbnailIndex = (selectedImage + 1 + index) % data_images.length;
        return data_images[thumbnailIndex];
    });

    return (
        <div className='content-sectionthree'>
            <div className={`experimenta-carousel ${animationClass}`} onAnimationEnd={handleAnimationEnd}>
                <div className="list-experimenta">
                    <div className="item-experimenta">
                        <img src={data_images[selectedImage].img} alt="" className='img-experimenta' />
                        <div className='content-experimenta'>
                            <div className="title-experimenta">{data_images[selectedImage].title}</div>
                            <div className="author-experimenta">{data_images[selectedImage].author}</div>
                            {/* <div className="topic-experimenta">{data_images[selectedImage].topic}</div>
 */}                            <div className="des-experimenta">
                                {data_images[selectedImage].description}
                            </div>
                            <div className="buttons-experimenta">
                                <button>Planifica ahora</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="thumbnail-experimenta">
                    {visibleThumbnails.map((image, index) => (
                        <div
                            key={index}
                            className={`item-experimenta-thumbnail ${index >= 3 ? 'hidden' : 'visible'}`}
                            onClick={() => handleThumbnailClick(selectedImage + 1 + index)}
                        >
                            <img src={image.img} alt="" className='img-experimenta-thumbnail' />
                        </div>
                    ))}
                </div>
                <div className="nextPrevArrows" >
                    <button className="prev btnarrow" onClick={handlePrevClick}>
                        <GrFormPrevious className='icon' />
                    </button>
                    <button className="next btnarrow" onClick={handleNextClick}>
                        <MdNavigateNext className='icon' />
                    </button>
                </div>
            </div>
        </div>
    );
}