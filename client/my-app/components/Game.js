
import GameGrid from './GameGrid'
import React, { useEffect, useState } from 'react';
import ScoreList from './ScoreList';
function Game({name, players, socket}) {
    const [colour, setColour] = useState('white')

    console.log(colour);
    const [timer, setTimer] = useState(30);
    const [score, setScore] = useState(new Array(players.length).fill(0));
   
    useEffect(() => {
        if (timer == 0) {
            return;
        }
        const interval = setInterval(() => {
            setTimer(timer => timer - 1) 
        }, 1000)
        return () => clearInterval(interval);
    }, [timer])

    //function to generate random grid
    const generateGrid = () => {
        const height = Math.floor(Math.random() * 5) + 1
        const width = Math.floor(Math.random() * 5) + 1
        const colours = ['red', 'green', 'yellow', 'blue', 'black']
        setBoxes(() => {
            const rows = []
            for (let i = 0; i < height; i++) {
                const column = []
                for (let j = 0; j < width; j++){
                    const ind = Math.floor(Math.random() * 5)
                    column.push(colours[ind])
                }
                rows.push(column)
            }
            return rows
        })
    }
    // 2d State with colour of each box
    const [boxes, setBoxes] = useState(() => {
        const rows = []
        for (let i = 0; i < 3; i++) {
        rows.push(new Array(3).fill('white'))
        }
        return rows
    })
    

    return (
    <>
        <div className="header">
                <div className="code-info position-absolute m-3 top-0 start-0 display-1 font-weight-bold text-white title">
                    <h2>Pixel Vision</h2>
                </div>
                <div className="code-info position-absolute m-3 mx-5 top-0 end-0 display-1 font-weight-bold text-white title">
                    <h2>{timer}</h2>
                </div>
        </div>
        <div className="h-100 d-flex flex-row align-items-center justify-content-center">
            <button onClick={() => generateGrid()}>TEMP BUTTON</button>
            <div className="bg-light bg-light mx-3 rounded shadow col-sm-6 d-flex flex-column justify-content-center align-items-center"
                style={{height: "75vh", width: "75vh"}}>
                <GameGrid height={boxes.length} width={boxes[0].length} colour={colour} boxes={boxes} setBoxes={setBoxes} />
            </div>
            <div className="colours col-5 d-flex flex-row justify-content-center gap-4 position-absolute top-0 p-5">
                <div className= "rounded-circle shadow-lg border border-3 border-dark" style={{'aspect-ratio': '1 / 1', height:'100%', minHeight:'10px', 'background-color':'red', cursor:'pointer'}} onClick = {() => {setColour('red')}}></div>
                <div className= "rounded-circle shadow-lg border border-3 border-dark" style={{'aspect-ratio': '1 / 1', height:'100%', minHeight:'10px', 'background-color':'blue', cursor:'pointer'}} onClick = {() => setColour('blue')}></div>
                <div className= "rounded-circle shadow-lg border border-3 border-dark" style={{'aspect-ratio': '1 / 1', height:'100%', minHeight:'10px', 'background-color':'yellow', cursor:'pointer'}} onClick = {() => setColour('yellow')}></div>
                <div className= "rounded-circle shadow-lg border border-3 border-dark" style={{'aspect-ratio': '1 / 1', height:'100%', minHeight:'10px', 'background-color':'green', cursor:'pointer'}} onClick = {() => setColour('green')}></div>
                <div className= "rounded-circle shadow-lg border border-3 border-dark" style={{'aspect-ratio': '1 / 1', height:'100%', minHeight:'10px', 'background-color':'black', cursor:'pointer'}} onClick = {() => setColour('black')}></div>
            </div>
            <div className="h-75 bg-light rounded shadow col-sm-3 d-flex flex-column justify-content-around overflow-auto">
                <ScoreList players={players} scores={score}/>
            </div>
            
        </div>
    </>
    
    )
}


export default Game;