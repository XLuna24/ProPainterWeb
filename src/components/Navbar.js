import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { handleScroll } from './Scroll'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    const scrollTo = (sectionId) => {
        handleScroll(sectionId)
        closeMenu()
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={() => scrollTo('home')}>
                        <img src='images/Logo_web.png' ></img>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faXmark : faBars} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                            href='#home'
                            className='nav-links'
                            onClick={() => scrollTo('home')}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            href='#services'
                            className='nav-links'
                            onClick={() => scrollTo('services')}
                            >
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            href='#gallery'
                            className='nav-links'
                            onClick={() => scrollTo('gallery')}
                            >
                                Gallery
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            href='#about-us'
                            className='nav-links'
                            onClick={() => scrollTo('about-us')}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                            href='#contact-us'
                            className='nav-links-mobile'
                            onClick={() => scrollTo('contact-us')}
                            >
                                contact us
                            </Link>
                        </li>
                    </ul>
                    {button &&
                        <Button
                            buttonStyle='btn--outline'
                            href='#contact-us'
                            onClick={() => scrollTo('contact-us')}
                        >
                            Contact Us
                        </Button>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar;
