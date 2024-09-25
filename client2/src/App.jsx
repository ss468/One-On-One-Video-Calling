

import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes } from "react-router-dom";
import Home from './components/Home/home';
import Room from './components/Room/room';
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/room/:roomid" element={<Room />} />

    </Routes>
    </>
  )
}

export default App
