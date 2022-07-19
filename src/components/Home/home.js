import { useState } from "react";
import './index.css'
import { Link} from 'react-router-dom';

// Home component
const Home = () => {
    // Hook for clickable title
    const [buttonText, setButton] = useState("Discover Your Local Breweries");

    function handleClick(){
        setButton(<Link to="/breweries"> </Link> );
    }
        return (
           <div className="home">
               <button onClick={handleClick}>{buttonText}</button>
               <div className="Beer-bg"></div>
            </div>
        )


}

export default Home