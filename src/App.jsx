import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Nav from './Components/Nav';
import Main from './Components/Main';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router basename="/"> {/* Add the base path */}
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Element name="home">
                <Main />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="portfolio">
                <Portfolio />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
