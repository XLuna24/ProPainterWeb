import React from 'react'
import '../../App.css'
import HeroSection from '../sections/HeroSection'
import ServiceSection from '../sections/ServiceSection'
import GallerySection from '../sections/GallerySection'
import AboutUs from '../sections/AboutUs'

function Home () {
    return (
        <>
            <HeroSection/>
            <ServiceSection/>
            <GallerySection/>
            <AboutUs/>
        </>
    )
}

export default Home;