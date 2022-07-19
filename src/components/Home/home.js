import React, { useState } from "react";
import './index.css'
import {Link, useNavigate} from "react-router-dom";
import Card from "react-native-web";

// Home component
const Home = () => {

        return (
           <div className="home">
               <Link to={"/breweries"}>
                   Discover Your Local Breweries
                   <div className="Beer-bg"></div>
               </Link>
            </div>
        )


}

export default Home