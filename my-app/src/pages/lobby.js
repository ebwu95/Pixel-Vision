import React from 'react';
import '../lobby.css';
import Slider from "../components/Slider"
function Lobby() {
    return (
        <div>
            <div className = "lobby-head"> 
                <div className="code-info"> 
                    <h4> Code: </h4>
                    <h2> AAAA </h2>
                </div>  
                <h1> Settings </h1>
            </div>
            <div className = "box-container">
                <div className = "settings-box">
                    <Slider />
                </div>
            </div>
        </div>
    )
}


export default Lobby;