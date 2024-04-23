import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

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
                    <Link to='/' className='navbar-logo' onClick={closeMenu}>
                        <img src='images/Logo_web.png' ></img>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faXmark : faBars} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='/services'
                            className='nav-links'
                            onClick={closeMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='/gallery'
                            className='nav-links'
                            onClick={closeMenu}
                            >
                                Gallery
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            to='/about-us'
                            className='nav-links'
                            onClick={closeMenu}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                            to='/contact-us'
                            className='nav-links-mobile'
                            onClick={closeMenu}
                            >
                                contact us
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
