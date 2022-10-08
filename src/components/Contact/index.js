import React, { useState } from 'react';

function Contact () {
    const [formState, setFormState] = useState({name:'', email:'', message:''});
    //here we destructured formState object so we don't have to type formState.name etc.
    const { name, email, message } = formState;
    
    function handleChange (e) {
        //setFormState function is used to update the formState value for the name
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        console.log(formState)
    }

    return(
        <section>
            <h1>Contact Me!</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
            <label htmlFor='email'>Email Address:</label>
            <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
            <label htmlFor='message'>Your Message:</label>
            <textarea name='message' rows='6' defaultValue={message} onBlur={handleChange} />
        </div>
        <button type='submit'>Submit</button>
            </form>

        </section>

    );
}

export default Contact;