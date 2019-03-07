import React from 'react';
import ItemList from './ItemList';
import Selected from './Selected';
import Matches from './Matches';
import NewItemForm from './NewItemForm';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import './../../styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class Closet extends React.Component{
  render(){
  return (
    <div className="test">
      <h3>This is the body</h3>
      <div className='body-grid'>
        <div>
          <ItemList itemList={this.props.itemList}/>
          <Link to="/newItemForm">add item</Link>
        </div>
        <div>
          <Selected/>
          <Matches/>
        </div>
      </div>
    </div>
  );
}
}

Closet.propTypes = {
    itemList: PropTypes.object
  };

const mapStateToProps = state => {
  return{
    itemList: state.itemList
  };
};

export default withRouter(connect(mapStateToProps)(Closet));
