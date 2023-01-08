import { useRouter } from 'next/router'
import React from 'react';
import LobbyLayout from '../../components/LobbyLayout'
import { useState, useEffect } from 'react';
export default function Lobby({socket}) {
    const router = useRouter()
    var [players, setPlayers] = useState([]);
    console.log(socket.id);
    useEffect(() => {
        socket.on('update_lobby', (data) => {
            setPlayers(data.players);
            console.log(data.players);
        })
    }, [socket]);
    return <LobbyLayout id={router.query.id} players={players}/>
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