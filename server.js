const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

mongoose
    .connect(
        'mongodb+srv://u_flashcards:'+ process.env.MONGO_ATLAS_PWD +'@cluster0-gbr14.mongodb.net/flashcards-app?retryWrites=true&w=majority',
        { useNewUrlParser: true, useCreateIndex: true }
    )
    .then(() => {
        console.log('MongoDB is connected');
    })
    .catch(err => {
        console.log(err);
    });

app.use('/api/flashcards', require('./routes/api/flashcards'));
app.use('/api/users', require('./routes/api/users'));

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
