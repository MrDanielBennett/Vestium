import React from 'react';
import ItemList from './ItemList';
import Selected from './Selected';
import Matches from './Matches';
import NewItemForm from './NewItemForm'
import './../../styles.css';
import { Link } from 'react-router-dom';


function Closet (){
  return (
    <div className="test">
      <h3>This is the body</h3>
      <div className='body-grid'>
        <div>
          <ItemList/>
          <Link to="/newItemForm">add item</Link>
        </div>
        <div>
          <Selected/>
          <Matches/>
        </div>
      </div>
    </div>
  );
}

export default Closet;
