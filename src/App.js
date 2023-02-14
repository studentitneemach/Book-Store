import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import './App.css';
import { Books } from "./BookStore/Books";
import { Cart } from "./BookStore/Cart";

const App =()=>{

  return( 
    <header className="mainHeader">

  <BrowserRouter>
           <nav> 
        <ul className="menu-bar">
        <li><NavLink to="/book">Books</NavLink></li>
      
        <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
      </nav>
    
      <Route path="/book" component={Books}  />
      
      <Route path="/cart" component={Cart}  />
    
      </BrowserRouter>

    </header>

)
}

export default App;
// https://www.codingame.com/playgrounds/9169/simple-redux-create-delete-contact-application