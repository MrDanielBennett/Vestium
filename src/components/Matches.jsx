import React from 'react';
import PropTypes from 'prop-types';

function Matched(props){
  let match = null;
  if (props.selectedItem.color === 'red'){
    match = "something black";
  }

  return (
    <div>
      <h4>This is the Matched</h4>
       <h1>{match}</h1>
    </div>
  );
}

Matched.propTypes = {
  selectedItem: PropTypes.object
}

export default Matched;
