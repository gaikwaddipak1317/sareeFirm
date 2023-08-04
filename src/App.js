// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainOwnerLogin from './components/MainOwnerLogin';
import BranchOwnerLogin from './components/BranchOwnerLogin';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar title="SareeFirm"/>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/main-owner-login" element={<MainOwnerLogin/>} />
        <Route path="/branch-owner-login" element={<BranchOwnerLogin/>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
