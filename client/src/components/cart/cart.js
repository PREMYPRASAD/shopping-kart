import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import "./cart.css";
import axios from "axios";
import config from "../../utils/config.json";
import Cartitems from "../Cartitems/Cartitems";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${config.api_base_url}/cart/items`);
        
        setCartItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, [cartItems]);
const increment = async (product_id) => {
    try {
      const response = await axios.put(`${config.api_base_url}/cart/increase/${product_id}`, { product_id });
      console.log(response);
      setCartItems(prevCartItems => {
        const updatedCartItems = prevCartItems.map(item => {
          if (item.product_id === product_id) {
            return {
              ...item,
              //quantity: newQuantity
            };
          } else {
            return item;
          }
        });
        return updatedCartItems;
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  

  const decrement = async (product_id, newQuantity) => {
    try {
      const response = await axios.put(`${config.api_base_url}/cart/decrease/${product_id}`, { product_id, quantity: newQuantity });
      console.log(response);
      const updatedCartItems = cartItems.map(item => {
        if (item.product_id === product_id) {
          return {
            ...item,
            quantity: newQuantity
          };
        } else {
          return item;
        }
      });
      setCartItems(updatedCartItems);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  
  
  const deleteItem = async (product_id) => {
    try {
      await axios.delete(`${config.api_base_url}/cart/${product_id}/delete`);
      setCartItems(
        cartItems.filter((item) => {
          return item.product_id !== product_id;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="card-container">
        {cartItems.map((product) => (
          <Cartitems 
          key={product.id} 
            item={product}
            deleteItem={deleteItem} 
          increment={increment}
            decrement={decrement}  
          />
        ))}
      </div>
    
    </div>
  );
}

export default Cart;
