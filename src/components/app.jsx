import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Closet from './Closet';
import Header from './Header';
import NewItemForm from './NewItemForm'

function App (){

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={Closet}/>
        <Route path='/newItemForm' render={NewItemForm}/>
      </Switch>
    </div>
  );
}

export default App;
