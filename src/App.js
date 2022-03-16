import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
