import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import {setPizzas, fetchPizzas} from "./redux/actions/pizzas"
import {useDispatch} from "react-redux"
import {Home, Cart} from './pages';


function App() {
    return (
        <Routes>
            <Route path = "/" element = {<Home/>} exact/>
            <Route path = "/cart" element = {<Cart/>} exact/>
        </Routes>
    );
}




export default App;
