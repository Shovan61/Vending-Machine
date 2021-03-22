import React, { PureComponent } from 'react';
import './VendingMachine.css';
import {Route, NavLink} from 'react-router-dom';

class VendingMachine extends React.Component{
render() {
return (
       <div className="VendingMachine">
           <NavLink className="Vend-link" to="/cocacola">Coca Cola</NavLink>
           <NavLink className="Vend-link" to="/sardines">Sardines</NavLink>
           <NavLink className="Vend-link" to="/chips">Chips</NavLink>
       </div>

)

}   
};

export default VendingMachine; 
