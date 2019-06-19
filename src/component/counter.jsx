import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 1,
        tags: []
    }

    renderTags(){
        if (this.state.tags.length === 0) return <p>No list found</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    render() { 
        return (
        <div>  
            {this.state.tags.length === 0 && 'please create a tag'}
            {this.renderTags()}
        </div>   
        );
    }
}
 
export default Counter; 