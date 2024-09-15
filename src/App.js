import './App.css';
import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Pages/Home/NavBar";
import Home from "./Pages/Home/Homescreen";
import { Gradient } from './components/Gradient.js';



function App() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas')
  }, []);

  return (
    <div className="App">
      <canvas id="gradient-canvas" data-transition-in/>
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*" element={<div> 404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
