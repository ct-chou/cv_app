import './styles/Contact.css';
import { useState } from 'react';

function Contact () {
    const [value, setValue] = useState({name: 'Chris', email: '', phone: ''});
    const [editMode, setEditMode] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const updatedValue = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone')
        };
        setValue(updatedValue);
        setEditMode(false);
    }

    function handleEdit() {
        setEditMode(true);
    }

    return(
        <div id='contact-container'>
            <h1>Contact Details</h1>
            <hr></hr>
            {editMode ? (
                    <form id='contact-form' onSubmit={handleSubmit}>
                        <label>Name:  
                            <input 
                                label="name" 
                                value={value.name}
                                type='text' 
                                name='name'
                                placeholder='Enter name'
                                onChange = {e => setValue({...value, name: e.target.value})}
                            />
                        </label>
                        <label> 
                            Email: <nbsp/>
                            <input 
                                label="email"
                                value={value.email}
                                type="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                onChange= {e => setValue({...value, email: e.target.value})}
                            />
                        </label>
                        <label>Phone: <nbsp/>
                            <input 
                                label="Phone"
                                type="tel" 
                                value={value.phone}
                                name="phone" 
                                placeholder="Enter your phone number" 
                                onChange= {e => setValue({...value, phone: e.target.value})}
                            />
                        </label>
                        <button 
                            type="submit" 
                            class="contact-button"
                        >
                            Submit
                        </button>
                        
                    </form>
            ) : (
                    <div id='contact-info'>
                        <p>Name: {value.name}</p>
                        <p>Email: {value.email}</p>
                        <p>Phone: {value.phone}</p>
                        <button type="button" 
                                class="contact-button" 
                                onClick={handleEdit}
                        >
                            Edit
                        </button>
                    </div>  
            )}
        </div>
    );
}

export default Contact;