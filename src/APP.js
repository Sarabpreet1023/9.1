import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '100px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🚀 React App Dockerized Successfully!</h1>
      <p>This app is running inside a Docker container using a multi-stage build.</p>
      <p>Served by <strong>Nginx</strong> at <code>http://localhost</code></p>
    </div>
  );
}

export default App;
