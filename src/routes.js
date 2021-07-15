import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Repositories from './components/Repositories';

export default Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/repositories' component={Repositories}/>
      </Switch>
    </BrowserRouter>
  )
}