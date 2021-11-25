import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '@styles/App.css';
import Home from "@pages/Home"

const App = props =>{
  return(
  <Router>
    <div className="nav-bar">
      <Link to="/">Home</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home {...props} name="Home"/>}/>
    </Routes>
  </Router>
  )
}

export default App;
