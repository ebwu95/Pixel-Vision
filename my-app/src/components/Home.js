import React from "react"
import Grid5x5 from "./Grid5x5"

function Home() {
    return (
        <div> 
            <header> Pixel Vision </header>
            <div className = "home-container"> 
                <Grid5x5 />
                <div className = "home-buttons-container">
                    <input className = "name-input" type = "text" placeholder="NAME" />
                    <div className = "code-input-container">
                        <input className = "code-input" type = "text" placeholder="CODE" />
                        <input className = "join-button" type="button" value="JOIN"/>
                    </div>
                    <input className = "create-room-button" type="button" value="CREATE ROOM"/>
                </div>
            </div>
        </div>)
}

export default Home;