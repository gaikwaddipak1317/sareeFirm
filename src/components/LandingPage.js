// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
   
  return (
    <div className="landing-page">
      <h1>Welcome to Sareefirm</h1>
      <p>Your house for saree shopping.</p>
      <Link to = "/branch-owner-login">
      <button>login here</button>
      </Link>
      
    </div>
  );
};

export default LandingPage;
