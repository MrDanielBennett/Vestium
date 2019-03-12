import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;
import * as action from './../actions';
import Closet from './Closet';
import Header from './Header';
import NewItemForm from './NewItemForm';
import * as actions from './../actions';
import shirtpic from './../../assets/t-shirt-icon.png';

class App extends React.Component{

componentWillMount(){
  const { dispatch } = this.props;
  const { watchFirebaseItemRef } = actions;
  dispatch(watchFirebaseItemRef());
}

render(){
  return (
    <div>
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=><Closet itemList={this.props.itemList}/>} />
        <Route path='/newItemForm' render={()=><NewItemForm/>} />
      </Switch>
    </div>
      <div className="background-path">
        <div className="shirt-float">
          <img className='shirtpic' src={shirtpic}></img>
          <img className='shirtpic2' src={shirtpic}></img>
          <img className='shirtpic3' src={shirtpic}></img>
          <img className='shirtpic4' src={shirtpic}></img>
          <img className='shirtpic5' src={shirtpic}></img>
          <img className='shirtpic6' src={shirtpic}></img>
        </div>
      </div>
  </div>
  );
}
}

App.propTypes ={
  itemList: PropTypes.object
};

const mapStateToProps = state => {
  return{
    itemList: state.itemList
  };
};

export default withRouter(connect(mapStateToProps)(App));
