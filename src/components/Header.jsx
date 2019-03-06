import React from 'react';
import { Link } from 'react-router-dom';


function Header (){

  return (
    <div>
      <Link to="/"><h1>VESTIUM</h1></Link>
    </div>
  );
}

export default Header;
