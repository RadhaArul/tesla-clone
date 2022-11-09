import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Model3 from "./components/Model3";
import ModelS from "./components/ModelS";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<ModelS />} />
          <Route path="/model3" element={<Model3 />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
