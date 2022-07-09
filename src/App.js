import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationSidebar from "./components/NavBar/navbar";

class App extends Component {
    render() {

        return (
            <div className="Beer">
                <h1> "Breweries"></h1>
            </div>

        );
    }
}

export default App;
