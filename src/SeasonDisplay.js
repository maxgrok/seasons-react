import './SeasonDisplay.css'
import React from 'react';

const getSeason = (lat, month) =>{
    if (month > 2 && month < 9){
        return lat > 0 ? "summer":"winter"
    }
    else{
        return lat > 0 ? "winter":"summer"
    }
}
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName:"sun"
    },
    winter:{
        text: "Burr. It is chilly.",
        iconName: "snowflake"
    }
}
const SeasonDisplay =(props) =>{
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season] //return our object with text and iconName inside of it

    console.log(season);
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h2>{text}</h2>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}
export default SeasonDisplay;