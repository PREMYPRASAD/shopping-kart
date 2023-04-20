import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './login.css'
import config from "../../utils/config.json";
import axios from "axios";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
//import { Outlet } from "react-router-dom";

 function Login () {
    const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const[isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();
    axios.defaults.withCredentials = true;
     const login = async(e) => {
         e.preventDefault();
         try {
             const response = await axios.post(`${config.api_base_url}/user/enter`, { username: email, password: pass })
         console.log("login",response);
      if (response.status === 200) {
        if (response.data.message) {
          alert("Invalid credentials");
        
          //navigate("/home");
          
        } else {
          
          setIsLogged(true);
          navigate("/home");
        }
      } else {
        alert("Request failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
   useEffect(() => {
    axios.get(`${config.api_base_url}user/login`).then((response) => {
      console.log(response)
      if (response.data.loggedIn === true) {
        setIsLogged(true); // update login status
      }
    });
  }, []);
     

   return (
     <div>
       <Navbar  isLogged={setIsLogged} />
       <div className="container">
         <form className="form" onSubmit={login}>
         <h2>Login</h2>
         <TextField
            label="UserName"
            variant="filled"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          &nbsp; &nbsp;
         <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />{" "}
          &nbsp; &nbsp;
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
         {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
       </div>
     </div>
   );
}
export default Login


































