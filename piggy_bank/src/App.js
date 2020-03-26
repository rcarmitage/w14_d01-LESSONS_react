import React from 'react';
import './App.css';
import PiggyBank from './PiggyBank';

function App() {
  return (
    <PiggyBank
      title="Savings Pig"
      depositAmount={7}
    />
  );
}

export default App;
