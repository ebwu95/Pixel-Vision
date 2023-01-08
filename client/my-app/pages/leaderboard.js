import Router from "next/router";
import React from "react";

//writen by Eric Wang e237wang@uwaterloo.ca

function Leaderboard() {

    const goLobby = () => {
        Router.push('/')
    };


    return (
        <div className="container-fluid mt-4 row justify-content-center">
            <header className="text-center display-1 font-weight-bold text-white title">LeaderBoard </header>
            <table className="table table-hover table-dark table-responsive caption-top w-50 text-center">
                <caption ><h1 className="text-white">Players</h1></caption>
                <thead>
                    <tr>
                        <th className="text-white">Rank</th>
                        <th className="text-white">Username</th>
                        <th className="text-white">Score</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider table-divider-color">
                    <tr>
                        <th className="text-white">1</th>
                        <th className="text-white">raymond MID <span className="badge bg-warning">1st</span></th>
                        <th className="text-white">2323</th>
                    </tr>
                    <tr>
                        <th className="text-white">2</th>
                        <th className="text-white">the goat <span className="badge bg-secondary">2nd</span></th>
                        <th className="text-white">12</th>
                    </tr>
                    <tr>
                        <th className="text-white">3</th>
                        <th className="text-white">nerd LOL <span className="badge bg-danger">3rd</span></th>
                        <th className="text-white">3</th>
                    </tr>
                    <tr>
                        <th className="text-white">4</th>
                        <th className="text-white">hold <span className="badge bg-success">lol</span></th>
                        <th className="text-white">-1</th>
                    </tr>
                    <tr>
                        <th className="text-white">5</th>
                        <th className="text-white">hold <span className="badge bg-success">lol</span></th>
                        <th className="text-white">-1</th>
                    </tr>
                    <tr>
                        <th className="text-white">6</th>
                        <th className="text-white">hold <span className="badge bg-success">lol</span></th>
                        <th className="text-white">-1</th>
                    </tr>
                    <tr>
                        <th className="text-white">7</th>
                        <th className="text-white">hold <span className="badge bg-success">lol</span></th>
                        <th className="text-white">-1</th>
                    </tr>
                </tbody>
            </table>

            <div className="d-flex align-items-center justify-content-center">
                <input type="button" className="btn btn-dark btn-lg" value="Home" onClick={goLobby}/>
            </div>

        </div>


    )
}

export default Leaderboard;