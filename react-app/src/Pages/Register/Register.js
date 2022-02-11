import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import './Register.css';

function Register() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");

    const register = () => {
        Axios({
            method: "POST",
            data: {
                password: registerPassword,
                email: registerEmail,
                username: registerUsername
            },
            withCredentials: true,
            url: "http://localhost:3200/auth/register",
        }).then((res) => console.log(res));
    };

    return (
        <div className='register-container'>
            <div className='register-form-div'>
                <form className='register-form' onSubmit={(e) => { e.preventDefault() }}>

                    <p className='register-input-text'>Username</p>
                    <input
                        className='register-input'
                        onChange={(e) => setRegisterUsername(e.target.value)}/>
                    
                    <p className='register-input-text'>Email</p>
                    <input
                        className='register-input'
                        onChange={(e) => setRegisterEmail(e.target.value)}/>

                    <p className='register-input-text'>Password</p>
                    <input
                        className='register-input'
                        onChange={(e) => setRegisterPassword(e.target.value)}/>
                    
                    <button className='register-submit' onClick={register}>Submit</button>
                </form>
            </div>
            <p>Don't Have An Account? <Link to='/Login' className='register-redirect'>Login</Link></p>
        </div>
    )
}

export default Register