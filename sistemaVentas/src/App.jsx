import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

import appFirebase from './firebaseConfig'
import {getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState } from "react";

const auth = getAuth(appFirebase)

function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if( usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }
  })

  return (
      <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* {usuario ? <Home correoUsuario ={usuario.email} /> : <Login/>} */}
      </>
  );
}

export default App;
