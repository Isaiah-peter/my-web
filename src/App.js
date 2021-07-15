import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './component/navbar'
import Header from './component/header'
import About from './component/about'

function App() {
  return (
    <div className="App">
      <div className='section'>
        <Router>
          <Header />
          <div className='bg-color'>
            <About />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
