import React from 'react'

const LoginForm = (handleSubmit,handleChange,register_login_handle) => {
    return (
        <div className='form-container'>
            <h1>Its what is Happening Now!!</h1>
            <form onSubmit={handleSubmit} method="post">
                <input type="text" name='username' placeholder='Enter Username:' onChange={handleChange} />
                <input type="password" name='password' placeholder='Enter Password:' onChange={handleChange} />
                <input type="submit" value="Login" />
            </form>
            Not a User?<button className='register-button' name='register' onSubmit={register_login_handle}>Register Here!!</button>
        </div>
    )
}

export default LoginForm
