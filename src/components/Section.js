import React from "react";
import {Routes, Route} from 'react-router-dom';
import Mens from "./sections/Mens";
import Womens from "./sections/Womens";
import Electronics from "./sections/Electronics";
import Cart from "./sections/Cart";
import ProductDetail from "./sections/ProductDetail";

export default function Section(){
    return (
        <Routes>
            <Route path="/mens" Component={Mens}/>
            <Route path="/womens" Component={Womens}/>
            <Route path="/electronics" Components={Electronics}/>
            <Route path="/electonics/:id" Component={ProductDetail}/>
            <Route path="/cart" Component={Cart}/>
        </Routes>
    );
}