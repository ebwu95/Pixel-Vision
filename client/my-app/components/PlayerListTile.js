import React from 'react'

function PlayerListTile({ username, color, }) {
    return (
        <div className="p-4 text-center border-bottom">{`${username}`}</div>
    )
}

export default PlayerListTile
