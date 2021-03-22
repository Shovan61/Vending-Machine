import React, { PureComponent } from 'react';
import './Chips.css';
import {Link} from 'react-router-dom';

class Chips extends React.Component{

constructor(props){
super(props);
this.state = {
    count: 0
}

}

handleClick(){

this.setState({count: this.state.count + 1});

}    

render() {
    let arr = [];
    console.log(arr);
    while (arr.length < this.state.count && this.state.count > 0){
        arr.push(<img className="Chips" src="https://purepng.com/public/uploads/large/purepng.com-lays-potato-chipsfood-potato-tasty-pack-lays-chips-taste-product-snaks-9415246340529nj3f.png" alt="lays"/>)
    }
    return (
      <div>
           <div className="Chips-container">
           {arr.map(curTag => curTag)}
           </div>  

       <button className="btn"
       onClick={() => this.handleClick()}
       >Get More</button>
     <h2 className="counting">Total Chips: {this.state.count}</h2>
     <Link className="back" to="/">Go Back</Link>
      </div>   
      
    )
}
};


export default Chips;

