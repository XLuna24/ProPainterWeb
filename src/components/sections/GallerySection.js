import React, { useState } from 'react'
import images from '../ImageImports'
import './GallerySection.css'

const GallerySection = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    return (
        <div className='image-gallery' style={{backgroundImage: `url(${currentImage})`}}>
            <div className='image-tint'></div>
            <div
                className='main-image'
                style={{backgroundImage: `url(${currentImage})`}}
            >
            </div>
            <div className='thumbnail-container'>
                {images.map((image, index) => (
                    <div className={`thumbnail-box ${currentImage === image ? 'active' : ''}`}>
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index}`}
                            className='thumbnail'
                            onClick={() => setCurrentImage(image)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GallerySection;