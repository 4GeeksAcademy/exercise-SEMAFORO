import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    return (
        <div className="container">
            <div className="traffic-top"></div>
            
            <div className="traffic-light">
                
                <div 
                    onClick={() => setColor("red")} 
                    className={"red light" + (color === "red" ? " selected" : "")}
                ></div>

                <div 
                    onClick={() => setColor("yellow")} 
                    className={"yellow light" + (color === "yellow" ? " selected" : "")}
                ></div>

                <div 
                    onClick={() => setColor("green")} 
                    className={"green light" + (color === "green" ? " selected" : "")}
                ></div>
                
            </div>
        </div>
    );
};

export default TrafficLight;