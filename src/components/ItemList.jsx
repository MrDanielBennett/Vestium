import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';



function ItemList(props){
  let render  = new FileReader();


  return (
    <div className="closet-container">
      <h1>Your Closet: </h1>
      <div className="closet-content">
        {Object.keys(props.itemList).map(function(itemId){
          let item = props.itemList[itemId];
          return <Item name={item.name}
                  type={item.type}
                  color={item.color}
                  image={item.image}
                  key={itemId}
                  itemId={itemId} />;
        })}
      </div>
    </div>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.object
};

export default ItemList;
