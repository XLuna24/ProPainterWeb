import React from 'react'
import '../../App.css'
import HeroSection from '../sections/HeroSection'
import ServiceSection from '../sections/ServiceSection'
import GallerySection from '../sections/GallerySection'
import AboutUs from '../sections/AboutUs'
import ContactUs from '../sections/ContactUs'
import Footer from '../Footer'

function Home () {
    return (
        <>
            <div id='home'>
                <HeroSection/>
            </div>
            <div id='services'>
                <ServiceSection/>
            </div>
            <div id='gallery'>
                <GallerySection/>
            </div>
            <div id='about-us'>
                <AboutUs/>
            </div>
            <div id='contact-us'>
                <ContactUs/>
            </div>
            <Footer/>
        </>
    )
}

export default Home;