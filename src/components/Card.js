import React from 'react'

function Card(props) {
    return (
        <>
            <li className='cards__item'>
                <div className='cards__item__container'>
                    <figure className='cards__item__pic-wrap' data-catagory={props.label}>
                        <img
                        className='cards__item__img'
                        alt='Service Image'
                        src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Card;