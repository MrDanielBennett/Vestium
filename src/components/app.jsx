import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Closet from './Closet';
import Header from './Header';

function App (){

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={Closet}/>
        </Switch>
      </div>
    );
  }

export default App
