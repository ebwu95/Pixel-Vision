import { useRouter } from 'next/router'
import { io } from "socket.io-client"
import React from 'react';
import LobbyLayout from '../../components/LobbyLayout'

const socket = io("http://localhost:3000")
export default function Lobby() {
    const router = useRouter()
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