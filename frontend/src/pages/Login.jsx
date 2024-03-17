import React, { useState } from 'react'
import '../styles/login.css';
import twitter from '../assets/twitter-background.jpg';


const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [formData,setFormData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username+" "+password);
    }

    return (
        <div className='container'>
            <div className="image">
                <img src={twitter} alt=""/>
            </div>
            <div className='form-container'>
                <h1>Its what is Happening Now!!</h1>
                <form onSubmit={handleSubmit} method="post">
                    <input type="text" id='username' placeholder='Enter Username:' onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" id="password" placeholder='Enter Password:' onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Login
