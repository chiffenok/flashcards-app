const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('<h1>hello2</h1>');
});
