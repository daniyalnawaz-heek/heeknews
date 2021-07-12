import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Headline from './Headline';
import Home from './Home';
import  BBC   from './BBC'
import  Business   from  './Business'
import Entertainment    from  './Entertainment'
import General     from  './General'
import   Health  from  './Health'
import Science    from  './Science'
import  Sport    from './Sport'
import   Technology   from  './Technology'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Headlines' component={Headline}></Route>
          <Route exact path='/BBC' component={BBC}></Route>
          <Route exact path='/Business' component={Business}></Route>
          <Route exact path='/Entertainment' component={Entertainment}></Route>
          <Route exact path='/General' component={General}></Route>
          <Route exact path='/Health' component={Health}></Route>
          <Route exact path='/Science' component={Science}></Route>
          <Route exact path='/Sport' component={Sport}></Route>
          <Route exact path='/Technology' component={Technology}></Route>



        </Switch>
        
      </div>
    )
  }
}

export default App
