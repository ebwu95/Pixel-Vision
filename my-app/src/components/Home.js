import React from "react"
import Grid5x5 from "./Grid5x5"

function Home() {
    return (
        <div className="h-100 position-absolute container-fluid bg-primary d-flex flex-column">
            <header className="text-center h1"> Pixel Vision </header>
            <div className="row flex-fill">
                <div className="col-sm-8 bg-dark">
                    <Grid5x5 />
                </div>

                <div className="col-sm-4 bg-danger d-flex flex-column justify-content-center">
                    <div className="border border-1 mx-5">
                        <div className="input-group p-2">
                            <span class="input-group-text px-3">NAME</span>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="input-group p-2">
                            <input className="form-control" type="text" placeholder="CODE" />
                            <button className="btn btn-success" type="button">JOIN</button>
                        </div>
                        <input className="create-room-button btn btn-outline-success" type="button" value="CREATE ROOM" />
                    </div>
                </div>
            </div>

        </div>)
}

export default Home;