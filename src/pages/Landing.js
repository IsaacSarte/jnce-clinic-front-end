import React from 'react'

// Components
import Home from '../components/Home';
import About from '../components/About';
// import Services from '../components/Services';
// import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Landing = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      {/* <Services />
      <Contact />
       */}
      <Footer />
    </>
  )
}

export default Landing;
