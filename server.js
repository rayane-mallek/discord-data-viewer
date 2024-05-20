const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  fs.readdir('./messages', (err, folders) => {
    if (err) {
      res.status(500).send('Error reading conversations.');
      return;
    }
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
});

app.get('/api/conversations', (req, res) => {
  fs.readdir('./messages', (err, folders) => {
    if (err) {
      res.status(500).send('Error reading conversations.');
      return;
    }
    res.json(folders);
  });
});

app.get('/conversation/:name', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'conversation.html'));
});

app.get('/api/conversation/:name', (req, res) => {
  const conversationName = req.params.name;
  const filePath = path.join(__dirname, 'messages', conversationName, 'messages.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading messages.');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
