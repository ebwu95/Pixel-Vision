import { useRouter } from 'next/router'
import { io } from "socket.io-client"
import React from 'react';
import LobbyLayout from '../../components/LobbyLayout'
import { useState, useEffect } from 'react';
export default function Lobby({socket}) {
    const [players, setPlayers] = useState([]);
    const router = useRouter()
    useEffect(() => {
        socket.on('update_room')
    })
    return <LobbyLayout id={router.query.id} />
}

// export function getAllLobbies(){
//     return [{params: {id: 'ABCD'}}, {params: {id: 'EFGH'}}, {params: {id: 'IJKL'}}];
// }

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