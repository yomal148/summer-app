import React, { useState } from "react";
import './index.css'
import {Link, useNavigate} from "react-router-dom";
import Breweries from "../Breweries/breweries.js"

// Home component
const Home = () => {
    // navigate function
    const navigate = useNavigate()

        return (
           <div className="home">
               <Link to={"/breweries"}>
                 <button> Discover Your Local Breweries</button>
               <div className="Beer-bg"></div>
               </Link>
            </div>
        )


}

export default Home