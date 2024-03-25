import React, { useState } from 'react'
import '../styles/login.css';
import twitter from '../assets/twitter-background.jpg';
import axios from 'axios';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';


const Login = () => {
    axios.defaults.baseURL = 'http://localhost:5000';
    const [formState,setFormState] = useState('');
    const [formData,setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('/login',formData);
            if(res.data === true){
                window.location.href = '/home';
            }
        }catch(err){
            console.log("Error Submitting Form: "+err);
        }
    }

    const register_login_handle = () =>{
        if(formState === "login"){
            <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} register_login_handle={register_login_handle} />
        }else if(formState === "register"){
            <RegisterForm />
        }
    }

    return (
        <div className='container'>
            <div className="image">
                <img src={twitter} alt=""/>
            </div>
            <div className='form-container'>
                <h1>Its what is Happening Now!!</h1>
                <form onSubmit={handleSubmit} method="post" >
                    <input type="text" name='username' placeholder='Enter Username:' onChange={handleChange} />
                    <input type="password" name='password' placeholder='Enter Password:' onChange={handleChange} />
                    <input type="submit" value="Login" />
                </form>
                Not a User?<button className='register-button' name='register' onSubmit={register_login_handle}>Register Here!!</button>
                </div>
        </div>
    )
}

export default Login
