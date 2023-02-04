import React, { useEffect } from "react"
import PlayerList from "./PlayerList.js"
function LobbyLayout({ socket, id, isCreator, players }) {
    return (
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="lobby-head">
                <div className="code-info position-absolute m-3 top-0 start-0 display-1 font-weight-bold text-white title">
                    <h4> Code: </h4>
                    <h2> {id} </h2>
                </div>
            </div>
            {/* <div className="box-container">
                <div className="settings-box">
                    <Slider />
                </div>
            </div> */}

            {/* {isCreator ? <SettingsPane socket={socket} lobby={id} players={players}/> : null} */}
            <SettingsPane socket={socket} lobby={id} players={players} />

            <div className="h-75 bg-light rounded shadow col-sm-3 d-flex flex-column justify-content-around overflow-auto">
                <PlayerList players={players} />
            </div>

        </div>
    )
};

{/* Settings Pane */ } {/* Lobby Name, Max Players, drawing time, #rounds, custom words */ }
function SettingsPane({ socket, lobby, players }) {
    const startGame = () => {
        const round = parseInt(document.querySelector('#rounds-select').value, 10);//picking the round works, but cant stop at chosen round
        const score = new Array(players.length).fill(0);
        console.log("chosen round:" + round);
        socket.emit('start_game_req', { lobby, score, round});
        
    }
    return (
        <div className="settings-pane h-75 px-3 pb-2 bg-light rounded shadow mx-5 col-sm-5 d-flex flex-column justify-content-around">
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
                        <select class="form-select form-select-lg" id="rounds-select">
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
                    <input className="mt-2 create-room-button btn btn-lg btn-success mx-2 w-auto" type="button" value="CREATE ROOM" onClick={startGame} />
                </div>

            </div>
        </div>

    )
}

export default LobbyLayout
