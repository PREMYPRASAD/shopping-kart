import React, { useState } from "react";
import config from "../../utils/config.json";
import axios from "axios";
 const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    
     const login = (e) => {
         e.preventDefault();
         axios.post(`${config.api_base_url}/user/login`, { username: email, password: pass })
             .then((response) => {
                 console.log(response);
             })
     }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="text" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={login}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
export default Login