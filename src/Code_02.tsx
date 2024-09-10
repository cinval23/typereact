import React, { Component } from 'react';

// Step 1: Define the state interface
interface CounterState {
  count: number; // 'count' is a number
}

// Step 2: Define an empty props interface (for future extensibility)
interface CounterProps {}

// Step 3: Define the class component with typed props and state
class Counter extends Component<CounterProps, CounterState> { 
  state: CounterState = {
    count: 0
  }; 

  // Step 4: Ensure the increment method works with the typed state
  increment = () => {
    this.setState({ count: this.state.count + 1 }); 
  }; 

  render() { 
    return (
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div> 
    );
  }
} 

export default Counter;