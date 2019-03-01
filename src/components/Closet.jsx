import React from 'react';
import ItemList from './ItemList';
import Selected from './Selected';
import Matches from './Matches';
import './../../styles.css';


function Home (){
    return (
      <div className="test">
        <h3>This is the body</h3>
        <div>
        <ItemList/>
        <Selected/>
        <Matches/>
        </div>
      </div>
    );
  }

export default Home
