import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Matched(props){
  console.log("My Guy... " + "yeah");
  let match = null;
  if (props.selectedItem.color === 'red' && props.selectedItem.type === 'shirt'){
    match = ["black", "blue"]
  }
  return (
    <div>
      <h4>This is the Matched</h4>
         {Object.keys(props.itemList).map(function(itemId){
           let item = props.itemList[itemId];
           if (match.includes(item.color)) {

           return <Item name={item.name}
                   type={item.type}
                   color={item.color}
                   key={itemId}
                   itemId={itemId} />;
               }
         })}
    </div>
  );
}

Matched.propTypes = {
  selectedItem: PropTypes.object,
  itemList: PropTypes.object
}

export default Matched;
