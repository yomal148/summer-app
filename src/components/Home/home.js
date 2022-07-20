import React, { useState } from "react";
import './index.css'
import {Link, useNavigate} from "react-router-dom";
import {Image, View, } from "react-native";

// Home component
const Home = () => {
        return (
            <div className="orange">
                <div className="Beer-bg"></div>
                <div className="text">
                    <h1 Find your local breweries ></h1>
                </div>
            </div>

        )


}

export default Home