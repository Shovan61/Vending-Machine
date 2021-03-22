import React, { PureComponent } from 'react'
import './CocaCola.css'
import {Link} from 'react-router-dom';

class CocaCola extends React.Component{
render() {
return (
    <div>
        <div className="CocaCola">
            
            <img className="cola1" src="https://troyvstew.files.wordpress.com/2011/12/white-coke-can.jpg" alt="cola1"/>

            <img className="cola2" src="https://troyvstew.files.wordpress.com/2011/12/white-coke-can.jpg" alt="cola2"/>

            
        </div>

        <Link className="back" to="/">Go Back</Link>
    </div>
    
)
}
};


export default CocaCola;