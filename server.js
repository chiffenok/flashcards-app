const express = require('express');
const mongoose = require('mongoose');

const app = express();
const flashcards = require('./routes/api/flashcards');

app.use(express.json());

mongoose
    .connect(
        'mongodb+srv://u_flashcards:1234123@cluster0-gbr14.mongodb.net/flashcards-app?retryWrites=true&w=majority',
        { useNewUrlParser: true }
    )
    .then(() => {
        console.log('MongoDB is connected');
    })
    .catch(err => {
        console.log(err);
    });

app.use('/api/flashcards', flashcards);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('<h1>hello2</h1>');
});
