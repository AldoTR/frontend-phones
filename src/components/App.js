import React from 'react';
import '../styles/App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import { Alumno } from "./Inicio";
import CreatePhone from './CreatePhone';
import Login from "./Login";
import Search from "./Search";
import Images from "./images-davinci";
import Traductor from "./traductor";
import Emojis from "./emojis";
import Books from "./libros";
import Correct from "./correccion";
import Receta from "./receta";

const Home = () => {
  return (
    <>
      <Alumno />
    </>
  );
};

function App (){
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePhone />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/imagen" element={<Images />} />
          <Route path="/translate" element={<Traductor />} />
          <Route path="/emojis" element={<Emojis />} />
          <Route path="/libros" element={<Books />} />
          <Route path="/correccion" element={<Correct />} />
          <Route path="/receta" element={<Receta />} />
        </Routes>
      </div>  
    </div>
  );
  };

export default App;