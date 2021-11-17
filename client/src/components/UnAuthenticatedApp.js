import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch,Redirect, useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import Button from "@restart/ui/esm/Button";



import Login from "./Login";
import Logout from "./Logout"
import Register from "./Register";
import About from "./About"
import NavBar from "./NavBar";
import ProductList from './ProductList';
import AddProduct from './AddProduct'

import AuthBar from './AuthBar';
import Profile from "./Profile"
import OrdersPage from "./OrdersCard"
import Order from "./OrdersCard.js";

import OrdersBooked from "./OrdersBooked";
import Cart from "./Cart";
import App from "./App";
import logo from '../data/logo.png';



function UnAuthenticatedApp ({ title= "Unauthenticated Site", setTitle, currentUser, setCurrentUser, handleLogin, setEmail, email, setPassword, password, productArr, setProductArr }){
    return(
    <BrowserRouter>
      <div id= 'Navbar-container'>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} title={title} setTitle={setTitle} />
        <h1>Welcome to Styles!</h1>
      </div>
   
    <Switch>
    <Route 
      exact path="/login" 
      render={props => <Login setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin}/>} />
    
    <Route path="/register" component={Register} />


       {/* <Route>
            <Register setCurrentUser={setCurrentUser} currentUser = {currentUser}/>
        </Route> */}

      <Route path="/about" component={About} />

          <Route path="/logout" component={Logout} />

          <Route path="/sale">
            <AddProduct title={"Deals on Styles"} setTitle={setTitle}/>
        </Route>
 
      </Switch>
      <ProductList title={"Welcome to Styles"} setProductArr={productArr}productArr={productArr}/>
    </BrowserRouter>
    )
};
export default UnAuthenticatedApp;