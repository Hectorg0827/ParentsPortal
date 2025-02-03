const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Lysio Parents’ Portal Backend is Running!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to the Lysio Parents' Portal</h1>
      <p>Select a section from the navigation to get started.</p>
    </div>
  );
}

export default App;