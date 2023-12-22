import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import QuizComp from './QuizComp';
import Footer from './Footer';
import Nvbar from './Nvbar';

const App = () => {
  return (
    <>
    <Nvbar /> 
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/service" element={<Service />} />
    <Route exact path="/quiz" element={<QuizComp />} />
    </Routes>
    <Footer />
   </>
  );
};

export default App
