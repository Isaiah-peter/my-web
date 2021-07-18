import React ,{ useEffect} from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './component/navbar'
import Header from './component/header'
import About from './component/about'
import Services from "./component/Services";
import Price from "./component/price";




function App() {
  useEffect(() => {
    AOS.init({
      duration:1500
    })
   },[])
  return (
    <div className="App">
      <div className='section'>
        <Router>
          <Navbar />
          <Header />
          <div className='bg-color'>
            <About />
            <Services />
            <Price />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
