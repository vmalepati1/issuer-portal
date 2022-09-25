import React from 'react';
import './registration.js.css';
import { useForm } from 'react-hook-form';

const Registration = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://backend.blocktransfer.io:8000/record/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }


    return (
        <div className='Registration'>
            <h1>Registration</h1>
            <form id='email' onSubmit={handleSubmit(onSubmit)}>
                <input type='email' name='user_email' {...register('email')} placeholder='Email' />
                <br/>
                <input type='submit' value='Send' />
            </form>
        </div>
    );
}
export default Registration;