import Router from "next/router";
import React from "react";
import RankTable from "../components/rankTable";


const data = [
    { id: 1, username: 'THENERDKING ', score: 90 },
    { id: 2, username: 'ur mom LOL ', score: 85 },
    { id: 3, username: 'RAmenNUDO ', score: 95 },
    { id: 4, username: 'diog ', score: 75 }
  ];
  
data.sort((a, b) => b.score - a.score);


function Leaderboard() {

    const goLobby = () => {
        Router.push('/')
    }; 

    return (
        <div className="container-fluid mt-4 row justify-content-center">
            <header className="text-center display-1 font-weight-bold text-white title">LeaderBoard </header>

            <RankTable data={data}/>

            <div className="d-flex align-items-center justify-content-center">
                <input type="button" className="btn btn-dark btn-lg" value="Home" onClick={goLobby}/>
            </div>

        </div>


    )
}

export default Leaderboard;