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