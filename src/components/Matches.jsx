import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Matched(props){
  //LOGIC
  let match = '';
  let type = ''
  if (props.selectedItem.color === 'red' && props.selectedItem.type === 'shirt'){
    match = ["black", "blue", "khaki", "brown", "navy"],
    type = "pants"
  } else if (props.selectedItem.color === 'white' && props.selectedItem.type === 'shirt'){
    match = ["black", "khaki", "orange", "green", "navy", "grey", "red", "brown"],
    type = "pants"
  } else if (props.selectedItem.color === 'yellow' && props.selectedItem.type === 'shirt'){
    match = ["black", "navy"],
    type = "pants"
  } else if (props.selectedItem.color === 'black' && props.selectedItem.type === 'shirt'){
    match = ["black", "orange", "navy", "green", "khaki", "grey", "red"],
    type = "pants"
  } else if (props.selectedItem.color === 'pink' && props.selectedItem.type === 'shirt'){
    match = ["black", "blue", "navy", "grey"],
    type = "pants"
  } else if (props.selectedItem.color === 'blue' && props.selectedItem.type === 'shirt'){
    match = ["black", "khaki", "orange", "brown"],
    type = "pants"
  } else if (props.selectedItem.color === 'purple' && props.selectedItem.type === 'shirt'){
    match = ["khaki", "black", "navy"],
    type = "pants"
  } else if (props.selectedItem.color === 'orange' && props.selectedItem.type === 'shirt'){
    match = ["black", "navy"],
    type = "pants"
  } else if (props.selectedItem.color === 'green' && props.selectedItem.type === 'shirt'){
    match = ["khaki", "black", "navy", 'grey'],
    type = "pants"
  } else if (props.selectedItem.color === 'grey' && props.selectedItem.type === 'shirt'){
    match = ["green", "navy", "black", "red"],
    type = "pants"
  } else if (props.selectedItem.color === 'brown' && props.selectedItem.type === 'shirt'){
    match = ["khaki", "black", 'navy'],
    type = "pants"
  }
  return (
    <div>
      <h4>These items from your closet will match your {props.selectedItem.name}:</h4>
         {Object.keys(props.itemList).map(function(itemId){
           let item = props.itemList[itemId];
           if (match.includes(item.color) && type === item.type){

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
