import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;

function Item(props){

  function handleSavingSelectedItem(itemId){
    const { dispatch } = props;
    const action = {
      type: c.SELECT_ITEM,
      itemId: itemId
    };
    dispatch(action);
  }

const itemInformation =
  <div>
    <p>{props.name}</p>
    <p>Color: {props.color} | Type: {props.type}</p>
    <hr/>
  </div>
  return (
    <div onClick={() => {handleSavingSelectedItem(props.itemId);}}>
      {itemInformation}
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default connect()(Item);
