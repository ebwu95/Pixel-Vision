import React from "react"
import PlayerList from "./PlayerList.js"

function LobbyLayout(props) {
    return (
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="lobby-head">
                <div className="code-info position-absolute m-3 top-0 start-0 display-1 font-weight-bold text-white title">
                    <h4> Code: </h4>
                    <h2> {props.id} </h2>
                </div>
            </div>
            {/* <div className="box-container">
                <div className="settings-box">
                    <Slider />
                </div>
            </div> */}


            {/* Settings Box */} {/* Lobby Name, Max Players, drawing time, #rounds, custom words */}
            <div className="h-75 ps-3 pe-3 bg-light rounded shadow mx-5 col-sm-5 d-flex flex-column justify-content-around">
                <h1 className="text-center"> Settings </h1>
                <div className="h-75 d-flex flex-column justify-content-between">
                    <div className="h-75 p-2 d-flex flex-column justify-content-between">
                        <div class="form-group pb-3">
                            <label for="gameSettingsLobbyName" className="form-label fs-5">Lobby Name</label>
                            <input className="form-control form-control-lg" placeholder="My Lobby" id="gameSettingsLobbyName" maxlength="25" />
                        </div>
                        <div class="form-group pb-3">
                            <label for="gameSettingsLobbyName" className="form-label fs-5">Max Players</label>
                            <select class="form-select form-select-lg">
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4" selected="selected">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div class="form-group pb-3">
                            <label for="gameSettingsLobbyName" className="form-label fs-5">Drawing Time (Seconds)</label>
                            <select class="form-select form-select-lg">
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                                <option value="60">60</option>
                                <option value="75">75</option>
                                <option value="90" selected="selected">90</option>
                                <option value="100">100</option>
                                <option value="120">120</option>
                                <option value="160">160</option>
                                <option value="180">175</option>
                                <option value="200">215</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="gameSettingsLobbyName" className="form-label fs-5">Rounds</label>
                            <select class="form-select form-select-lg">
                                <option value="2">2</option>
                                <option value="3" selected="selected">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>


                    <div className="d-grid">
                        <input className="mt-2 create-room-button btn btn-lg btn-success mx-2 w-auto" type="button" value="CREATE ROOM" />
                    </div>

                </div>
            </div>

            <div className="h-75 bg-light rounded shadow col-sm-3 d-flex flex-column justify-content-around overflow-auto">
                <PlayerList players={["Raymond", "Raymond", "Goat", "Raymond", "RAYMOND", "raymond", "rayMond", "Raymond", "Raymond", "Ray"]} />
            </div>

        </div>
    )
}
export default LobbyLayout