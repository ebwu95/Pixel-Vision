import React, { useState } from 'react'

const GameGrid = ({width, height, colour}) => {
    const [isMouseDown, setIsMouseDown] = useState(false)
    // 2d State with colour of each box
    const [boxes, setBoxes] = useState(() => {
        const rows = []
        for (let i = 0; i < height; i++) {
        rows.push(new Array(width).fill('white'))
        }
        return rows
    })
    // Function to toggle the state of a box
    const toggleBox = (row, col) => {
        setBoxes(prevBoxes => {
        const newBoxes = JSON.parse(JSON.stringify(prevBoxes))
        newBoxes[row][col] = colour
        return newBoxes
        })
    }

    const rows = []
    for (let i = 0; i < height; i++) {
        const cols = []
        for (let j = 0; j < width; j++) {
            const boxColor = boxes[i][j]
            cols.push(
                <td
                  key={j}
                  style={{ border: '5px solid black', backgroundColor: boxColor, aspectRatio: 1}}
                  onClick={() => toggleBox(i, j)}
                  onMouseEnter={() => isMouseDown && toggleBox(i, j)}
                    onMouseDown={() => setIsMouseDown(true)}
                    onMouseUp={() => setIsMouseDown(false)}
                
                >
                  {}
                </td>)
        }
        rows.push(<tr key={i}>{cols}</tr>)
    }

    return (
        <table className="h-100 w-100" style={{'table-layout':'fixed', 'border':'5px solid black'}}>
        <tbody>{rows}</tbody>
        </table>
    );
};

export default GameGrid
