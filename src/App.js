import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationSidebar from "./components/NavBar/navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container p-5">
            <NavigationSidebar/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
