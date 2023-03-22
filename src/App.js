import logo from './logo.svg';
import './App.css';
import Distract from './Component/Distract';
import React from 'react';
import LoadPost from './Component/LoadPost';
function App() {

  return (
    <div>
     <Distract name="Abu Al Shahriar"/>
     <LoadPost></LoadPost>
    </div>
  );
}

export default App;
