import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Episode from "./Pages/Episode/Episode";
import axios from "axios";

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [selected, setSelected] = useState([]);

  // console.log(selected);

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
        // state "selected" is passing to Main but won't pass to Episode // ?!
        <Route path="/main" element={<Main episodes={episodes} setSelected={setSelected} selected={selected}/>}/>
        <Route path="/episode" element={<Episode selected={selected} />} />
      </Routes>
      <div className="dsaasd"></div>
      <Episode selected={selected}  />
    </div>
  );
}

export default App;
