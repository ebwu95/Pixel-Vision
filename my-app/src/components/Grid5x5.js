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
    <div className="vw vh d-flex flex-column">
      <div className="row flex-fill d-flex flex-nowrap">
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
      </div>
      <div className="row flex-fill d-flex flex-nowrap">
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-dark col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-dark col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
      </div>
      <div className="row flex-fill d-flex flex-nowrap">
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
      </div>
      <div className="row flex-fill d-flex flex-nowrap">
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-dark col flex-fill"></span>
        <span className="border border-4 border-dark bg-dark col flex-fill"></span>
        <span className="border border-4 border-dark bg-dark col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
      </div>
      <div className="row flex-fill d-flex flex-nowrap">
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
        <span className="border border-4 border-dark bg-white col flex-fill"></span>
      </div>
    </div>
  )
}

export default Grid5x5;
