import React from "react";

//writen by Eric Wang e237wang@uwaterloo.ca

function Leaderboard() {
    return (
        <div class="container-fluid mt-4 row justify-content-center">
            <header className="text-center display-1 font-weight-bold text-white title">LeaderBoard </header>
            <table class="table table-hover table-dark table-responsive caption-top w-50 text-center">
                <caption ><h1 class="text-white">Players</h1></caption>
                <thead>
                    <tr>
                        <th class="text-white">Rank</th>
                        <th class="text-white">Username</th>
                        <th class="text-white">Score</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider table-divider-color">
                    <tr>
                        <th class="text-white">1</th>
                        <th class="text-white">raymond MID <span class="badge bg-warning">1st</span></th>
                        <th class="text-white">2323</th>
                    </tr>
                    <tr>
                        <th class="text-white">2</th>
                        <th class="text-white">the goat <span class="badge bg-secondary">2nd</span></th>
                        <th class="text-white">12</th>
                    </tr>
                    <tr>
                        <th class="text-white">3</th>
                        <th class="text-white">nerd LOL <span class="badge bg-danger">3rd</span></th>
                        <th class="text-white">3</th>
                    </tr>
                    <tr>
                        <th class="text-white">4</th>
                        <th class="text-white">hold <span class="badge bg-success">lol</span></th>
                        <th class="text-white">-1</th>
                    </tr>
                    <tr>
                        <th class="text-white">5</th>
                        <th class="text-white">hold <span class="badge bg-success">lol</span></th>
                        <th class="text-white">-1</th>
                    </tr>
                    <tr>
                        <th class="text-white">6</th>
                        <th class="text-white">hold <span class="badge bg-success">lol</span></th>
                        <th class="text-white">-1</th>
                    </tr>
                    <tr>
                        <th class="text-white">7</th>
                        <th class="text-white">hold <span class="badge bg-success">lol</span></th>
                        <th class="text-white">-1</th>
                    </tr>
                </tbody>
            </table>

            <div class="d-flex align-items-center justify-content-center">
                <button type="button" class="btn btn-dark btn-lg">Home</button>
            </div>

        </div>


    )
}

export default Leaderboard;