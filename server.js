const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('<h1>hello2</h1>');
});