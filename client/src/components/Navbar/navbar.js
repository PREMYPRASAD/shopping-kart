import React, { useState,useEffect } from 'react'
import './navbar.css'
import logo from '../../ASSETS/logo.png'
import axios from "axios";
import { Link } from "react-router-dom";
import config from "../../utils/config.json";
const Navbar = () => {
    const [cartquantity, setcartquantity] = useState([]);
    useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${config.api_base_url}/cart/items`);
        setcartquantity(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, []);
    return (
        <nav>
            <div className='s1'>
                <img src={logo} alt='logo' className='logo' />
                <div className='searchbar'>
                    <input type='text' placeholder="search for products" className='search' />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </button>
                </div>
                
            
            <div className='right'>
                <div className='cart'>
                    
               <Link to="/cart">
                        <span className='qty'>{cartquantity.length}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
               </Link>         
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                </div>
        </div>
            <div className="s2">
                <Link to='/home'>HOME</Link>
                <Link to="/home"><div className="menuitems"></div></Link>
        <Link to="/signup"><div to="/signup" className="menuitems">REGISTER</div></Link>
        
          
          
                {/* <a>Login In</a> */}
                {/* <Link to='/signup'>Sign Up</Link> */}
                {/* <a>Sign up</a> */}
                <a>CONTACT US</a>
            </div>
            
        
                </nav>
    )
}

export default Navbar