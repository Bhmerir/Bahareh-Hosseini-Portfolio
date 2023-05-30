import React, { useState } from 'react';
import "../../assets/styles/common.css";
import { validateEmail } from '../../utils/helper';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        }else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleBlur = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputValue.trim() === '') {
            if (inputType === 'name') {
                setErrorMessage('❌ The name should be entered!');
            }else if (inputType === 'email') {
                setErrorMessage('❌ The email should be entered!');
            } else {
                setErrorMessage('❌ The message should be entered!');
            }
        }
        else{
            if (inputType === 'email') {
                if (!validateEmail(email)) {
                    setErrorMessage('❌ Email is not valid!');
                    return;
                }
            }
            setErrorMessage('');
        }
    };

    function sendEmail() {
        const recipientEmail = "mer_ir@yahoo.com";
        const subject = `A message from ${name}`;
        const body = message;
      
        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
        window.location.href = mailtoUrl;
      }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if(!name){
            setErrorMessage('❌ The name is not entered!');
            return;
        }
        else if(!email){
            setErrorMessage('❌ The email is not entered!');
            return;
        }
        else if(!message){
            setErrorMessage('❌ The message is not entered!');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('❌ The email is not valid!');
            return;
        }

        sendEmail();
        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div className="page contact-page">
            <div className="col-5 contact-form rounded-2 m-5">       
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Name</label>
                    <input 
                        value= {name}
                        name= "name" 
                        onChange= {handleInputChange}
                        onBlur= {handleBlur}
                        type= "text"
                        className= "form-control" 
                        id= "name"
                        placeholder= "name"
                        autoFocus
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input 
                        value= {email}
                        name= "email" 
                        onChange= {handleInputChange}
                        onBlur= {handleBlur}
                        type= "text"
                        className= "form-control" 
                        id= "email"
                        placeholder= "email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="messageTextarea" className="form-label">Message</label>
                    <textarea 
                        value= {message}
                        name= "message" 
                        onChange= {handleInputChange}
                        onBlur= {handleBlur}
                        className="form-control" 
                        id="messageTextarea" 
                        rows="3"
                        placeholder= "message"
                    >    
                    </textarea>
                </div>
                <p className="form-label error-message">{errorMessage}</p>
                <button type="button" onClick={handleFormSubmit} className="btn btn-success email-btn ps-5 pe-5">Send Email</button>
            </div>
            <div className="col-7">
                
            </div>
        </div>
        
    );
}

export default Contact;