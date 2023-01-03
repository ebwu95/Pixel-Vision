import Home from "./pages/home"
import Lobby from "./pages/lobby"
import Gamestate from "./pages/gamestate"
import React from "react"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom'; 
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lobby' element={<Lobby/>} />
          <Route path='/gamestate' element={<Gamestate/>} />
        </Routes>
    </Router>
  )
}

export default App;
