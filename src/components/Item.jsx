import React from 'react';
import PropTypes from 'prop-types';

function Item (props){

    return (
      <div>
        <p>{props.name}</p>
        <p>Color: {props.color} | Type: {props.type}</p>
        <hr/>
      </div>
    );
  }

  Item.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string.isRequired,
    type: PropTypes.string.isReqired
  };

export default Item;
