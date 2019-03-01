import React from 'react';
import Item from './Item';

function ItemList (){

    return (
      <div>
        <h4>This is the ItemList</h4>
        <Item
        name="Red T-Shirt"
        type='shirt'
        color='red'/>
      </div>
    );
  }

export default ItemList;
