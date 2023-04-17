// import { Container } from "react-bootstrap";
import React  from 'react';
import {Routes,Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home';
// import Footer from './components/Footer/footer';
import Cart from "./components/cart/cart";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }
  return (
    <>
      {/* <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div> */}
      {/* <main className="my-3">
        <Container> */}
          <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div> <h1> 404 not found</h1>
        </div>}/>
        
          </Routes>
          {/* </Container>
      </main> */}

    

      
      </>
  );
}

export default App;
