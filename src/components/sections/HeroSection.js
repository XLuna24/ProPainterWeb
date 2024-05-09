import React from 'react'
import '../../App.css'
import { Button } from '../Button'
import './HeroSection.css'
import { handleScroll } from '../Scroll'

function HeroSection() {
  return (
    <div className='hero-container'>
        <img src='/images/YellowComplete.png' class='behind left'/>
        <img src='/images/OrangeComplete.png' class='behind right'/>
        <img src='/images/ColorHouse.png' class='front'/>
        <h1>
            Binging professional vibrant colors and finishes to your home.
        </h1>
        <div className='hero-btns'>
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={() => handleScroll('contact-us')}
            >
                Contact Us
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
