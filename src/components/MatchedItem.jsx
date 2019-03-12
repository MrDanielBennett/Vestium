import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;

function MatchedItem(props){

const itemInformation =
  <div className="item">
    <h4>{props.name}</h4>
    <img src={props.image} />
  </div>
  return (
    <div>
      {itemInformation}
    </div>
  );
}

MatchedItem.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
};

export default connect()(MatchedItem);
