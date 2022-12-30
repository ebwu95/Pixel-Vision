import React from 'react';
import '../lobby.css';
import Slider from "../components/Slider"
function Lobby() {
    return (
        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <div className="lobby-head">
                <div className="code-info position-absolute top-0 start-0 display-1 font-weight-bold text-white title">
                    <h4> Code: </h4>
                    <h2> AAAA </h2>
                </div>
            </div>
            {/* <div className="box-container">
                <div className="settings-box">
                    <Slider />
                </div>
            </div> */}


            {/* Settings Box */}
            <div className="h-75 p-3 bg-light rounded shadow mx-5 col-sm-5 d-flex flex-column justify-content-center">
                <h1 className="text-center"> Settings </h1>
                <div className="h-75 d-flex flex-column justify-content-around">
                    <div className="">
                        <div className="input-group input-group-lg p-2">
                            <span class="input-group-text px-3">NAME</span>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="input-group input-group-lg p-2">
                            <input className="form-control" type="text" placeholder="CODE" />
                            <button className="btn btn-success" type="button">JOIN</button>
                        </div>
                        <div>
                            <input type="range" class="form-range" step="10" />
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="check1" name="option1" value="something" checked />
                            <label class="form-check-label" for="check1">Option 1</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" />
                            <label class="form-check-label" for="check2">Option 2</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" disabled />
                            <label class="form-check-label">Option 3</label>
                        </div>
                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
                        <select class="form-select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" checked />
                            <label class="form-check-label" for="mySwitch">Dark Mode</label>
                        </div>
                    </div>


                    <div className="d-grid">
                        <input className="mt-2 create-room-button btn btn-lg btn-success mx-2 w-auto" type="button" value="CREATE ROOM" />
                    </div>

                </div>
            </div>

        </div>
    )
}


export default Lobby;