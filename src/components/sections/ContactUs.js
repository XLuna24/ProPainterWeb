import React, { useState } from 'react'
import './ContactUs.css'
import FormInput from '../FormInput'
import { Button } from '../Button'

function ContactUs() {
    const [values, setValues] = useState({
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        address:''
    })

    const inputs = [
        {
            id:1,
            name:'firstname',
            type:'text',
            placeholder:'First Name',
            label:'First Name'
        },
        {
            id:2,
            name:'lastname',
            type:'text',
            placeholder:'Last Name',
            label:'Last Name'
        },
        {
            id:3,
            name:'phone',
            type:'text',
            placeholder:'Phone',
            label:'Phone'
        },
        {
            id:4,
            name:'email',
            type:'text',
            placeholder:'Email',
            label:'Email'
        },
        {
            id:5,
            name:'address',
            type:'text',
            placeholder:'Address',
            label:'Address'
        }
    ]

    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(values)
    }

    const onChange = (e)=> {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
        <>
            <div className='contact-container'>
                <div className='form-container'>
                    <div className='contact-info'>
                    <img src='/images/Logo_web.png' ></img>
                        <h2>Schedual A Free Estimate Today!</h2>
                        <h1>Contact Us</h1>
                    </div>
                   <form onSubmit={handleSubmit}>
                        {inputs.map((input) => (
                            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                        ))}
                        <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            type={'submit'}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default ContactUs