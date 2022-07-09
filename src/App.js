import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationSidebar from "./components/NavBar/navbar.js";
import Home from "./components/Home/home.js"
import Breweries from "./components/Breweries/breweries.js"

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <NavigationSidebar/>
                    <div>
                        <Routes>
                            <Route path="/">
                                <Route path={''} element={<Home/>}/>
                                <Route path="/breweries" element={<Breweries/>}/>
                            </Route>
                        </Routes>
                    </div>
                </BrowserRouter>
        );
    }
}

export default App;
