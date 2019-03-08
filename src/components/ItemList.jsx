import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function ItemList(props){
  return (
    <div>
      <h4>Your Closet: </h4>
      <div>
        <hr/>
        {Object.keys(props.itemList).map(function(itemId){
          let item = props.itemList[itemId];
          return <Item name={item.name}
                  type={item.type}
                  color={item.color}
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
