 import React, { PureComponent } from 'react'
 import './App.css';
 import {Switch, Route,NavLink} from 'react-router-dom';
 import VendingMachine from './VendingMachine';
 import CocaCola from './CocaCola.js';
 import Sardines from './Sardines';
 import Chips from './Chips.js'

class App extends React.Component{
  render() {
    return (
      <div>
         <nav className="navbar">
         <h2>Vending Machine</h2>
         <ul className="ul-link">
             <NavLink activeClassName="active-link" className="NavLink" exact to="/">Machine</NavLink>
             <NavLink activeClassName="active-link" className="NavLink" exact to="/cocacola">Coca Cola</NavLink>
             <NavLink activeClassName="active-link" className="NavLink" exact to="/sardines">Sardines</NavLink>
             <NavLink activeClassName="active-link" className="NavLink" exact to="/chips">Chips</NavLink>
         </ul>
       </nav>
        
       <Switch>
         <Route exact path="/" component={() => <VendingMachine/>}></Route>
         <Route exact path="/cocacola" component={() => <CocaCola/>}></Route>
         <Route exact path="/sardines" component={() => <Sardines/>}></Route>
         <Route exact path="/chips" component={() => <Chips/>}>{}</Route>
       </Switch>

      </div>
    )
  }
}

export default App;
