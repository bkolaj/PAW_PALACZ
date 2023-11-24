const express = require('express');
const path = require('path');
const { fileURLToPath } = require('url');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, './views/contact.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});