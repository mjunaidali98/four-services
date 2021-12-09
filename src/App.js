import React from "react";
import "./style.css";
import Weather from "./components/weather";
import Covid from "./components/covid";
import Wordnet from "./components/wordnet";
import Location from "./components/location";
import Home from "./components/home";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-home">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/covid-stats" element={<Covid />} />
          <Route path="/wordnet" element={<Wordnet />} />
          <Route path="/location" element={<Location />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
