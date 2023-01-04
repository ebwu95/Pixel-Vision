import React from 'react'

function PlayerListTile({ username, color, }) {
    return (
        <div className="p-4 text-center border-bottom">{`${username} ${color}`}</div>
    )
}

export default PlayerListTile
