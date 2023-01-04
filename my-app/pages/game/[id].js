import { useRouter } from 'next/router'
import React from 'react';
import LobbyLayout from '../../components/LobbyLayout'
export default function lob2() {
    const router = useRouter()
    let lobbyID = router.query.id === undefined ? router.query.id : router.query.id.slice(0, -3)
    return <LobbyLayout id={lobbyID} />
}

// export function getAllLobbies(){
//     return [{params: {id: 'ABCD'}}, {params: {id: 'EFGH'}}, {params: {id: 'IJKL'}}];
// }

// export async function getStaticPaths() {
//     const paths = getAllLobbies();
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