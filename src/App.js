import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ModelS from "./components/ModelS";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<ModelS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
