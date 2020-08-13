import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Head from './components/Head/Head'
import About from './components/About/About';
import Featured from './components/Featured/Featured';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import FaQ from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    < >
      <Navbar/>
      <Head/>
      <About/>
      <Featured/>
      <Products/>
      <Testimonials/>
      <FaQ/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
