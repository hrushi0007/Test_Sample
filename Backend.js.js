const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());

// Serve Frontend.html as static file at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend.html'));
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
