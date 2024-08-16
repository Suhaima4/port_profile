// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import SocialIcon from './SocialIcon';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <SocialIcon 
          href="https://www.linkedin.com/in/sukhaima-ms-0b5993267/" 
          Icon={FaLinkedin} 
          alt="LinkedIn" 
        />
        <SocialIcon 
          href="https://github.com/suhaima4" 
          Icon={FaGithub} 
          alt="GitHub" 
          className="github-icon" 

        />
        <SocialIcon 
          href="https://suhaimafayis5@gmail.com" 
          Icon={FaEnvelope} 
          alt="Email" 
          className="gradient-icon" 
        />
      </div>
    
      <h5>&copy; 2024 All rights reserved</h5>
    </footer>
  );
}

export default Footer;
