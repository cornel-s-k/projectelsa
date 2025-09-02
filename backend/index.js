const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Ini data dari server Express!' });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});