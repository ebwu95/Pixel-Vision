import { useRouter } from 'next/router'
import React from 'react';
import LobbyLayout from '../../components/LobbyLayout'
import { useState, useEffect } from 'react';
import Game from '../../components/Game'
export default function Lobby({ name, socket }) {
    const router = useRouter()
    var [players, setPlayers] = useState([]);
    var [inGame, setInGame] = useState(false)
    useEffect(() => {
        socket.on('update_lobby', (data) => {
            setPlayers(data.players);
            console.log(data.players);
        })
        socket.on('start_game', () => {
            console.log("moving!");
            setInGame(true);
        }) 
    }, [socket]);
    const isCreator = socket.id == router.query.id
    if (inGame) {
        return <Game name={name} socket={socket} players={players} /> 
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