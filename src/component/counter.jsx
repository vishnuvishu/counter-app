import React, { Component } from 'react';
class Counter extends Component {
    state =     {count: 1,
    tags: ['tag1', 'tag2', 'tag3']}
    // imageUrl: "https://picsum.photos/200"}
    styles = {
        fontSize: 20,
        fontWeight: "bold"
    };
    render() { 
      //  let classes = this.getBatchClasses();
        return (
        <React.Fragment>
            <span style={this.styles} className={this.getBatchClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            {this.state.tags.map((tag) => {
                return <li key={tag}>{tag}</li>
            })}
        </React.Fragment>   
        );
    }

    getBatchClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount () {
        const { count } = this.state
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;