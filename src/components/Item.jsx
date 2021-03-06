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
  <div className="item">
    <h4>{props.name}</h4>
    <p>Color: {props.color} | Type: {props.type}</p>
    <img src={props.image} />
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
  type: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default connect()(Item);
