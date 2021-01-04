import React from 'react';
import './App.css';

import {Provider} from "react-redux";
import {store} from "./redux/store";

// product addition
import ProductItem from "./components/ProductItem";

import ClassWishMessage from "./components/ClassWishMessage";
import FuncWishMessage from "./components/FuncWishMessage";
import ReduxWishMessage from "./components/ReduxWishMessage";

let App = () => {

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Redux - Events Binding</a>
            </nav>

        <ClassWishMessage/>
        <FuncWishMessage/>

           <Provider store={store}>
                <ReduxWishMessage/> 
                <ProductItem/>       
           </Provider>

         <div style={{marginBottom : '200px'}}/>
        </React.Fragment>
    );
};
export default App;
