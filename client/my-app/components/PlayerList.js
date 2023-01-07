import React from 'react'
import PlayerListTile from './PlayerListTile.js'

function PlayerList({ players }) {
    return (
        <div className="h-100 pt-1 d-flex flex-column justify-content-start">
            {players.map((player) => { return (<PlayerListTile username={player} />) })}

        </div>
    )
}

export default PlayerList