import React from 'react';
import Greeting from './Code_01';
import Counter from './Code_02';
import './App.css'

const App: React.FC = () => {
    return (
        <div>
            <Greeting name="cinval" />
            <Counter />
        </div>
    );
};

export default App;