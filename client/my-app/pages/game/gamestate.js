import React, { useState } from 'react'
import GameGrid from '../../components/GameGrid'
function Gamestate() {
    const [colour, setColour] = useState('white')

    return (
    <>
        <div className="header">
                <div className="code-info position-absolute m-3 top-0 start-0 display-1 font-weight-bold text-white title">
                    <h2>Pixel Vision</h2>
                </div>
                <div className="code-info position-absolute m-3 mx-5 top-0 end-0 display-1 font-weight-bold text-white title">
                    <h2>00:30</h2>
                </div>
        </div>
        <div className="h-100 d-flex flex-row align-items-center justify-content-center  bg-dark">
            <div className="chat h-75 bg-light col-sm-3 rounded shadow d-flex flex-column justify-content-between align-items-center">
                <div className="h-75"></div>
                <input className=" w-100 rounded border" style={{ height:'10%', border:'none',}} placeholder='chat here'></input>
            </div>
            <div className="h-75 bg-light bg-light mx-3 rounded shadow col-sm-6 d-flex flex-column justify-content-center align-items-center">
                <GameGrid height={50} width={50} colour={colour} />
            </div>
            <div className="h-75 col-sm-2 d-flex align-items-end justify-content-start flex-row gap-3">
                <div className="colours h-100 col-5  d-flex flex-column align-items-center justify-content-center gap-4">
                    <div className=" rounded-circle" style={{'aspect-ratio': '1 / 1', height:'15%', 'background-color':'red', cursor:'pointer'}} onClick = {() => setColour('red')}></div>
                    <div className=" rounded-circle" style={{'aspect-ratio': '1 / 1', height:'15%', 'background-color':'blue', cursor:'pointer'}}onClick = {() => setColour('blue')}></div>
                    <div className=" rounded-circle" style={{'aspect-ratio': '1 / 1', height:'15%', 'background-color':'yellow', cursor:'pointer'}}onClick = {() => setColour('yellow')}></div>
                    <div className=" rounded-circle" style={{'aspect-ratio': '1 / 1', height:'15%', 'background-color':'green', cursor:'pointer'}}onClick = {() => setColour('green')}></div>
                    <div className=" rounded-circle" style={{'aspect-ratio': '1 / 1', height:'15%', 'background-color':'black', cursor:'pointer'}}onClick = {() => setColour('black')}></div>
                </div>
                <div className="h-100 col-7 ">
                <div className="d-flex align-items-center justify-content-center text-center border border-dark rounded-top" style={{ height:'12%', 'background-color':'#CDCDCD'}}>
                    #2: TOP G <br/>
                    Points: 3
                </div>
                <div className="d-flex align-items-center justify-content-center text-center border border-dark" style={{ height:'12%', 'background-color':'#CDCDCD'}}>
                    #3: USERNAME<br/>
                    Points: 5
                </div>
                <div className="d-flex align-items-center justify-content-center text-center border border-dark" style={{ height:'12%', 'background-color':'#CDCDCD'}}>
                    #1: USERNAME<br/>
                    Points: 6
                </div>
                <div className="d-flex align-items-center justify-content-center text-center border border-dark" style={{ height:'12%', 'background-color':'#CDCDCD'}}>
                    #1: USERNAME<br/>
                    Points: 6
                </div>
                <div className="d-flex align-items-center justify-content-center text-center border border-dark" style={{ height:'12%', 'background-color':'#CDCDCD'}}>
                    #1: USERNAME<br/>
                    Points: 6
                </div>
            
                <div className="d-flex align-items-center justify-content-center text-center border border-dark rounded-bottom" style={{ height:'12%', 'background-color':'#CDCDCD'}}>
                    #4: USERNAME<br/>
                    Points: 2
                </div>
                </div>
            </div>
            
        </div>
    </>
    
    )
}


export default Gamestate