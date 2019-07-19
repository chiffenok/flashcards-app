const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
    originalWord: { type: String, required: true },
    translationWord: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = Flashcard = mongoose.model('Flashcard', FlashcardSchema);
