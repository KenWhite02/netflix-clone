import React, { useEffect, useState } from 'react';
import netflix from '../images/netflix.png';
import avatar from '../images/avatar.png';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 230) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img className="nav_logo" src={netflix} alt="Logo" />

      <img className="nav_avatar" src={avatar} alt="Logo" />
    </div>
  );
}

export default Nav;
