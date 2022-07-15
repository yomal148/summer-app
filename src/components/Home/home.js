import React, { Component, useState } from "react";
import './index.css'
import { Text, StyleSheet } from "react-native";

const Home = () => {
    const [titleText, setTitleText] = useState("Bird's Nest");
    const bodyText = "This is not really a bird nest.";

    const onPressTitle = () => {
        setTitleText("Bird's Nest [pressed]");
    };
        return (
            <Text>
                <Text onPress={onPressTitle()}>
                    {titleText}
                    {"\n"}
                    {"\n"}
                </Text>
            <Text numberOfLines={5}>{bodyText}</Text>
            </Text>

           /* <div className="home">

                <h1>Discover Your Local Breweries</h1>
                <div className="Beer-bg"></div>
            </div>*/
        )


}

export default Home