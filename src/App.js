import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'

import Home from './pages/home/Home'
import VideoDetail from './components/Videos/VideoDetail'
import Collect from './pages/collect/Collect'
import Navbar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'

import './App.css' 

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/VideoDetail/:VideoID">
          <VideoDetail />
        </Route>
        <Route path="/Collect">
          <Collect />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
