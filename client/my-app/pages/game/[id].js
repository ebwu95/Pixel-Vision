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
            setInGame(true);
        }) 
        socket.on('start_round_1', (data) => {
            setRound(data.round);
            setBoxes(data.boxes);
        })
    }, [socket]);
    const isCreator = socket.id == router.query.id
    
    if (inGame) {
        return <Game score={score} boxes={boxes} setBoxes={setBoxes} round={round} timeLimit={5 * round} isCreator={isCreator} playerID={players.findIndex((player) => player === name)} socket={socket} players={players} /> 
    }
    else {
        return <LobbyLayout socket={socket} id={router.query.id} isCreator={isCreator} players={players} />
    }
}
