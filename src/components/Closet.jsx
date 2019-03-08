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
    let optionalSelectedItem = null;
    let matchesForSelectedItem = null;
    if (this.props.selectedItem.length > 0){
      optionalSelectedItem =  <Selected selectedItem={this.props.itemList[this.props.selectedItem]}/>;
      matchesForSelectedItem = <Matches selectedItem={this.props.itemList[this.props.selectedItem]}
      itemList ={this.props.itemList}/>
    }
  return (
    <div className="test">
      <div className='body-grid'>
        <div className="itemList">
          <ItemList itemList={this.props.itemList}/>
          <Link to="/newItemForm">add item</Link>
        </div>
        <div className='select-match'>
          {optionalSelectedItem}
          {matchesForSelectedItem}
        </div>
      </div>
    </div>
  );
}
}

Closet.propTypes = {
    itemList: PropTypes.object,
    selectedItem: PropTypes.object
  };

const mapStateToProps = state => {
  return{
    selectedItem: state.selectedItem,
    itemList: state.itemList
  };
};

export default withRouter(connect(mapStateToProps)(Closet));
