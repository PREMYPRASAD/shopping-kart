import React,{ useEffect, useState} from 'react'
import axios from 'axios';
import config from "../../utils/config.json"
import "./items.css";
function Item () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchproducts = async () => {
            try {
                const response = await axios.get(`${config.api_base_url}/api/products`)
                const data = response.data;
                setProducts(data);
                
            }
    
            catch (error) {
                console.log(error);
            }
        };
        fetchproducts();
    }, []);
     const addToCart = async (product) => {
    try {
      const response = await axios.post(`${config.api_base_url}/cart/items/add`,product);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card-container">
      {products.length > 0 &&
        products.map(product => (
      <div className="card" key={product.id}>
            <div className="card-content">
                <h2>{product.name}</h2>
        <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button className="button">Buy Now</button>&nbsp;&nbsp;
            <button className="bttn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            </div>
            </div>
    ))}
  </div>

  )
}

export default Item
