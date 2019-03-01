import React from 'react';
import Item from './Item';

function ItemList (){

  let masterItemList = [
    {
      name: 'Red T-shirt',
      type: 'shirt',
      color: 'red'
    },
    {
      name: 'black jeans',
      type: 'pants',
      color: 'black'
    },
    {
      name: 'white long sleeve',
      type: 'shirt',
      color: 'white'
    },
    {
      name: 'green pants',
      type: 'pants',
      color: 'green'
    }
  ];

  return (
    <div>
      <h4>This is the ItemList</h4>
      <div>
        <hr/>
        {masterItemList.map((item, index)=>
          <Item name={item.name}
            type={item.type}
            color={item.color}
            key={index}/>
        )}
      </div>
      <Item
        name="Red T-Shirt"
        type='shirt'
        color='red'/>
    </div>
  );
}

export default ItemList;
