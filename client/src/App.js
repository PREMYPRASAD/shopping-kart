// import { Container } from "react-bootstrap";
import React  from 'react';
// import { Routes, Route } from 'react-router-dom'
import { Outlet, useRoutes } from "react-router-dom"
import './App.css';
import Home from './pages/home';
// import Footer from './components/Footer/footer';
import Cart from "./components/cart/cart";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import AuthProtect from "./components/AuthProtect";
import MainLayout from "../src/components/mainLayout"

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }
  return useRoutes([
    {
  
    path: "/",
      element: (
          <AuthProtect>
            <MainLayout>
                <Outlet />
            </MainLayout>
          </AuthProtect>
      ),
      
    children: [
        { path: "/", element: <Login /> },
        // { path: "signin", element: <SignIn /> },
        { path: "home", element: <Home /> },
        { path: "cart", element: <Cart /> },
        { path: "signup", element: <Register/> }
      ],
    },
    { path: "signin", element: <Login /> },
  ]);
}


      
      
  
export default App;
