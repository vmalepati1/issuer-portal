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
        <section className="wrapper">
            <div className="content">
                <header>
                    <h1>Subscribe Us</h1>
                </header>
                <section>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </section>
                <footer>
                    <form id='email' onSubmit={handleSubmit(onSubmit)}>
                        <input type='email' name='user_email' {...register('email')} placeholder='Email' />
                        <button class="button" type='submit' value='Send'>Let's go</button>
                    </form>
                </footer>
            </div>
        </section>
    );
}
export default Registration;