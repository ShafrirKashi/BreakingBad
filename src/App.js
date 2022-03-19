import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Episode from "./Pages/Episode/Episode";
import Character from "./Pages/Character/Character";
import axios from "axios";
import './App.css'


function App() {
  const [episodes, setEpisodes] = useState([]);
  const [selected, setSelected] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad"
      );
      setEpisodes(data);
    };
    getData();
  }, []);

 


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main episodes={episodes} setSelected={setSelected} selected={selected}/>}/>
        <Route path="/episode/:id" element={<Episode  episodes={episodes} />} />
        <Route path="/:character" element={<Character/>} />
      </Routes>
    </div>
  );
}

export default App;
