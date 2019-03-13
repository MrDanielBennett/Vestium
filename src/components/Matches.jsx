import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import MatchedItem from './MatchedItem';

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
    match = ["black", "khaki", "orange", "brown", 'grey'],
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
    match = ["green", "navy", "black", "red", 'khaki'],
    type = "pants"
  } else if (props.selectedItem.color === 'brown' && props.selectedItem.type === 'shirt'){
    match = ["khaki", "black", 'navy'],
    type = "pants"
  } else if (props.selectedItem.color === 'red' && props.selectedItem.type === 'pants'){
    match = ["white", "black", 'grey'],
    type = "shirt"
  } else if (props.selectedItem.color === 'yellow' && props.selectedItem.type === 'pants'){
    match = ["yellow", "black",],
    type = "shirt"
  } else if (props.selectedItem.color === 'white' && props.selectedItem.type === 'pants'){
    match = ["black", "yellow", 'orange', 'green', 'blue', 'grey', 'red', 'brown'],
    type = "shirt"
  } else if (props.selectedItem.color === 'black' && props.selectedItem.type === 'pants'){
    match = ["black", "orange", 'blue', 'green', 'grey', 'red', 'blue', 'yellow', 'white', 'brown'],
    type = "shirt"
  } else if (props.selectedItem.color === 'blue' && props.selectedItem.type === 'pants'){
    match = ["pink", "black", 'white'],
    type = "shirt"
  } else if (props.selectedItem.color === 'orange' && props.selectedItem.type === 'pants'){
    match = ["blue", "black", 'white'],
    type = "shirt"
  } else if (props.selectedItem.color === 'green' && props.selectedItem.type === 'pants'){
    match = ["grey", "white", 'black'],
    type = "shirt"
  } else if (props.selectedItem.color === 'grey' && props.selectedItem.type === 'pants'){
    match = ["green", "black", 'white', 'grey', 'pink'],
    type = "shirt"
  } else if (props.selectedItem.color === 'brown' && props.selectedItem.type === 'pants'){
    match = ["blue", "white", 'black', 'red'],
    type = "shirt"
  } else if (props.selectedItem.color === 'khaki' && props.selectedItem.type === 'pants'){
    match = ["red", "white", 'black', 'pink', 'blue', 'purple', 'orange', 'green', 'grey', 'brown'],
    type = "shirt"
  } else if (props.selectedItem.color === 'navy' && props.selectedItem.type === 'pants'){
    match = ["red", "white", 'black', 'pink', 'purple', 'orange', 'green', 'grey', 'brown'],
    type = "shirt"
  }
  return (
    <div className="match-container">
      <h4>These items from your closet will match your {props.selectedItem.name}:</h4>
      <div className='match-content'>
         {Object.keys(props.itemList).map(function(itemId){
           let item = props.itemList[itemId];
           if (match.includes(item.color) && type === item.type){

           return <MatchedItem name={item.name}
                   image={item.image}
                   key={itemId}
                   itemId={itemId} />;
               }
         })}
       </div>
    </div>
  );
}

Matched.propTypes = {
  selectedItem: PropTypes.object,
  itemList: PropTypes.object
}

export default Matched;
