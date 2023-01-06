import Home from "./pages/home"
import Lobby from "./pages/lobby"
import React from "react"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom'; 
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lobby' element={<Lobby/>} />
        </Routes>
    </Router> 
  )
}

export default App;
