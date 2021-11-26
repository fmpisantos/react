import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '@styles/App.css';
import Home from "@pages/Home"
import About from "@pages/About"

const App = props =>{
  return(
  <Router>
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home {...props} name="Home"/>}/>
      <Route path="/about" element={<About {...props} name="About"/>}/>
    </Routes>
  </Router>
  )
}

export default App;
