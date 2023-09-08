// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
      </Routes>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </Router>
  );
}

export default AppRouter;
