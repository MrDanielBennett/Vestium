import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

function  App (){

    return (
      <div>
        app works
        <Switch>
          <Game/>
        </Switch>
      </div>
    );
  }
}

export default App
