import { useRouter } from 'next/router'
import React from 'react';
import LobbyLayout from '../../components/LobbyLayout'
export default function lob2() {
    const router = useRouter()
    return <LobbyLayout id={router.query.id}/>
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