import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './component/navbar'
import Header from './component/header'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar  />
      <Header />
      </Router>
    </div>
  );
}

export default App;
