import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;

function Item(props){

const itemInformation =
  <div>
    <p>{props.name}</p>
    <p>Color: {props.color} | Type: {props.type}</p>
    <hr/>
  </div>
  return (
    <div>
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
