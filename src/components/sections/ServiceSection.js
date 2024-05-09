import React from 'react'
import './ServiceSection.css'
import Card from '../Card'

function ServiceSection() {
    return (
        <div className='service-container'>
            <div className='cards'>
                <h1>Services</h1>
                <div className='cards__container'>
                <ul className='cards__items'>
                            <Card
                                src='images/YellowRoom.png'
                                text='InteriorPainting'
                            />
                            <Card
                                src='images/BlueRoom.png'
                                text='Drywall Repair'
                            />
                            <Card
                                src='images/BrownHouse.png'
                                text='Front Porch Stain'
                            />
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection