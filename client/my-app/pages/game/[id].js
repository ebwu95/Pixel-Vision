import { useRouter } from 'next/router'
import React from 'react';
import LobbyLayout from '../../components/LobbyLayout'
import { useState, useEffect } from 'react';
import Game from '../../components/Game'
export default function Lobby({ name, socket }) {
    const router = useRouter()
    var [players, setPlayers] = useState([]);
    var [inGame, setInGame] = useState(false);
    const [boxes, setBoxes] = useState([]);
    const [round, setRound] = useState(0);
    const [score, setScore] = useState(new Array(players.length).fill(0));
    useEffect(() => {
        socket.on('update_lobby', (data) => {
            setPlayers(data.players);
        })
        socket.on('start_round_0', (data) => {
            setRound(data.round);
            setBoxes(data.boxes);
            setScore(data.scores)
            console.log(data);
            setInGame(true);
        }) 
        socket.on('start_round_1', (data) => {
            setRound(data.round);
            setBoxes(data.boxes);
            console.log(round);
        })
    }, [socket]);
    const isCreator = socket.id == router.query.id
    
    if (inGame) {
        console.log(round);
        return <Game score={score} boxes={boxes} setBoxes={setBoxes} round={round} timeLimit={5 * round} isCreator={isCreator} playerID={players.findIndex((player) => player === name)} socket={socket} players={players} /> 
    }
    else {
        return <LobbyLayout socket={socket} id={router.query.id} isCreator={isCreator} players={players} />
    }
}

// export function getAllLobbies(){
//     return [{params: {id: 'ABCD'}}, {params: {id: 'EFGH'}}, {params: {id: 'IJKL'}}];
// }n

// export async function getStaticPaths() {
//     const paths = getAl  lLobbies();
//     return {paths, fallback: false,};
// }

// export async function getStaticProps({ params }) {
//     console.log(params.id);
//     return {
//         props: {
//             id: params.id,
//         },
//     }
// }