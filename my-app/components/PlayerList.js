import React from 'react'
import PlayerListTile from './PlayerListTile.js'

function PlayerList(props) {
    return (
        <div className="h-100 pt-1 d-flex flex-column justify-content-start">
            <PlayerListTile username="Eric" color="Blue" />
            <PlayerListTile username="Raymond" color="Red" />
            <PlayerListTile username="Evan" color="Green" />
            <PlayerListTile username="Kevin" color="Yellow" />
            <PlayerListTile username="Raymond" color="Red" />
            <PlayerListTile username="Raymond" color="Red" />
            <PlayerListTile username="Raymond" color="Red" />
            <PlayerListTile username="Raymond" color="Red" />

        </div>
    )
}

export default PlayerList
