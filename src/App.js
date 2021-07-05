import React from "react";
import Navbar from './component/navbar'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      </Router>
      welcome
    </div>
  );
}

export default App;
