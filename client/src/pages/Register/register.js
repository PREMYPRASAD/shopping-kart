import React, { useState } from "react";
import axios from "axios";
import config from "../../utils/config.json";

 const Register = (props) => {
    const [email, setEmail] = useState('');
     const [pass, setPass] = useState('');
     const [registerStatus, setRegisterStatus] = useState('');
    //const [name, setName] = useState('');

    
        
       // console.log(email);
    
     const register = (e) => {
         e.preventDefault();
         axios.post(`${config.api_base_url}/user/register`, { username: email, password: pass })
             .then((response) => {
                 console.log(response);
                 if (response.data.message) {
                     setRegisterStatus(response.data.message);
                 } else {
                     setRegisterStatus("Account created successfully");
                 }
             })
     }
    

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form">
                {/* <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />*/}
            <label htmlFor="email">email</label> 
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="text" placeholder="enter username" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={register}>Sign Up</button>
                <h1 style={{color:'red', fontSize:'15px',textAlign:'center',marginTop:'20px'}}>{registerStatus}</h1>
        </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            
    </div>
    )
}
export default Register