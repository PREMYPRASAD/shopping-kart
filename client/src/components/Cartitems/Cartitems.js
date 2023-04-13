import React, { useState } from "react";
import './Cartitems.css'
//import Cart from "../cart/cart";
// import axios from "axios";
// import config from "../../utils/config.json";
function Cartitems({ item, increment, decrement, deleteItem }) {
  const [quantity, setQuantity] = useState(item.quantity);

  
  

  return (
    <div>
      <div className="card" key={item.id}>
        
        <div className="card-content">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <div class="quantity">
          <button
          size="small"
          layout="outline"
          disabled={item.quantity === 1}
          onClick={() => decrement(item.product_id)}
        >
          -
        </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={item.quantity}
              onChange={(e) => setQuantity((e.target.value))}
            />
              <button size="small" layout="outline" onClick={()=>increment(item.product_id)}>
          +
        </button>
          </div>
         
         
          <button
            class="add-to-cart"
            onClick={() => deleteItem(item.product_id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartitems;
