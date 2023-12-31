import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./sections/Home";
import Mens from "./sections/Mens";
import Womens from "./sections/Womens";
import Electronics from "./sections/Electronics";
import Cart from "./sections/Cart";
import ProductDetail from "./sections/ProductDetail";

export default function Section(){
    return (
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/mens" Component={Mens}/>
            <Route path="/mens/:id" Component={ProductDetail} />
            <Route path="/womens" Component={Womens}/>
            <Route path="/womens/:id" Component={ProductDetail} />
            <Route path="/electronics" Components={Electronics}/>
            <Route path="/electonics/:id" Component={ProductDetail}/>
            <Route path="/cart" Component={Cart}/>
        </Routes>
    );
}