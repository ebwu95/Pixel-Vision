import React from 'react'

function PlayerListTile({ username }) {
    return (
        <div className="p-4 text-center border-bottom">{`${username}`}</div>
    )
}

export default PlayerListTile
