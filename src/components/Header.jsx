import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

function Header(){
  return (
    <div className="header">
      <Link className="basic-text" to="/"><h1>VESTIUM</h1></Link>
    </div>
  )
  };

export default Header;
