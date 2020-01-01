import React from 'react';
import './App.css';
import Nav from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Contact />
    </>
  );
}

export default App;
