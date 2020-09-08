import React from 'react';
import logo from './logo.svg';
import './App.css';

import PostForm from './components/PostForm';
import Posts from './components/Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;
