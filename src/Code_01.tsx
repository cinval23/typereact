import React from 'react';

// Step 1: Define the type for props
type GreetingProps = {
  name: string; // 'name' must be a string
};

// Step 2: Define the functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;