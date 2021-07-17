import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './component/navbar'
import Header from './component/header'
import About from './component/about'
import Services from "./component/Services";

function App() {
  return (
    <div className="App">
      <div className='section'>
        <Router>
          <Navbar />
          <Header />
          <div className='bg-color'>
            <About />
            <Services />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
