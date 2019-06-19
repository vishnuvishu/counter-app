import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 1,
        tags: []
    }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    
    handleIncrement = ( product) => {
        console.log('pro', product)
       // this.state.count = this.state.count + 1
      //console.log(this)
      this.setState({count: this.state.count + 1})
    }

    // doHandleIncrement = () => {
    //     this.handleIncrement({ id : 1})
    // }

    render() { 
        return (
        <div>  
            <button onClick={() => {this.handleIncrement({ id : 1})}}>Increment</button>
            <p>{this.state.count}</p>
        </div>   
        );
    }
}
 
export default Counter; 