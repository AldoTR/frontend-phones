import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import { Alumno, Imagen } from "./Inicio";
import PhoneList from './PhoneList';
import CreatePhone from './CreatePhone';
import Login from "./Login";
import Search from "./Search";
import Openai from "./openai";
import Images from "./images-davinci";
import Text from "./text-davinci-003";

const Home = () => {
  return (
    <>
      <Alumno />
      <PhoneList />
    </>
  );
};

function App (){
  return (
    <div>
      <Header />
      <Imagen />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePhone />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/openai" element={<Openai />} />
      </Routes>
    </div>
  );
  };

export default App;