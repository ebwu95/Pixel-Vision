import React from "react"
// function Grid5x5() {
//   const cells = []
//   for (let i = 0; i < 25; i++) {
//     cells.push(<div style={{backgroundColor: "white"}} className="grid-item"> </div>)
//   }
//   cells[6] = <div style={{backgroundColor: "black"}} className="grid-item"> </div>
//   cells[8] = <div style={{backgroundColor: "black"}} className="grid-item"> </div>
//   cells[6] = <div style={{backgroundColor: "black"}} className="grid-item"> </div>
//   cells[16] = <div style={{backgroundColor: "black"}} className="grid-item"> </div>
//   cells[17] = <div style={{backgroundColor: "black"}} className="grid-item"> </div>
//   cells[18] = <div style={{backgroundColor: "black"}} className="grid-item"> </div>  
//   return (
//     <div className="grid-container">
//         {cells}
//       </div>
//     )
// }


function Grid5x5() {
  return (
    <div className="border border-1 m-5 w-80 h-100">
      <div className="row">
        <span className="border border-3 border-dark col vw-9.5 vh-9.5"></span>
        <span className="border border-3 border-dark col vw-9.5 vh-9.5"></span>
        <span className="border border-3 border-dark col vw-9.5 vh-9.5"></span>
      </div>
      <div className="row w-10">
        <span className="border border-3 border-dark col vw-9.5 vh-9.5"></span>
        <span className="border border-3 border-dark col vw-9.5 vh-9.5"></span>
        <span className="border border-3 border-dark col vw-9.5 vh-9.5"></span>
      </div>
      <div className="row w-10">
        <span className="border border-3 border-dark col vw-9.5 vh-9.5"></span>
        <span className="border border-3 border-dark col vw-9.5 vh-9.5"></span>
        <span className="border border-3 border-dark col vw-9.5 vh-9.5"></span>
      </div>
    </div>
  )
}

export default Grid5x5;
