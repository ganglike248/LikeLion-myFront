import React, { useState } from 'react';
import Time from './Time';
import Hello from './Hello';
import './App.css';

function App() {
  const [name, setName] = useState();
  
  return (
  <div>
    <input
        style={{width: 300, height: 30, borderRadius: 20, fontSize: 30, padding: 15}}
        type="text"
        onChange={(e) => setName(e.target.value)}>
    </input>
    <Hello user={name}/>
    <Time/>
  </div>
  );
};

export default App;
