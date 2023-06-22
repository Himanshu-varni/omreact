import React from 'react'
import { Routes ,Route } from 'react-router-dom';
//import Home from '../src/components/'
//import Home from '../pages/home';
import Navbar from '../src/components/navbar/navarbar'
import AboutUs from '../src/components/aboutus/aboutus';
import Reviews from '../src/components/reviews/reviews';
import Services from '../src/components/services/services';
import Portfolio from '../src/components/portfolio/portfolio';
import Blog from '../src/components/blog/blog';
import Contactus from '../src/components/contactus/contactus';


const App =()=> {
  return (
  <Routes>
    <Route path="/" element={< Navbar />} >
      <Route path="/Aboutus" element={< AboutUs />} />
      <Route path="/Reviews" element={< Reviews />} />
      <Route path="/Services" element={< Services />} />
      <Route path="/Portfolio" element={< Portfolio />} />
      <Route path="/Blog" element={< Blog />} />
      <Route path="/Contactus" element={< Contactus />} />
    </Route>
  </Routes>

    
  )
}

export default App