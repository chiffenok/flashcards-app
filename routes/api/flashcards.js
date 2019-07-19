const express = require('express');
const router = express.Router();

const Flashcard = require('../../models/Flashcard');

// @route api/flashcards
// @desc Get all flashcards
// @access Public
router.get('/', (req, res) => {
    Flashcard.find()
        .sort({ date: -1 })
        .then(flashcards => {
            res.status(200).json(flashcards);
        })
        .catch(err => {});
});

// @route api/flashcard
// @desc Create a flashcard
// @access Public
router.post('/', (req, res) => {
    const newFlashcard = new Flashcard({
        originalWord: req.body.originalWord,
        translationWord: req.body.translationWord
    });
    newFlashcard
        .save()
        .then(flashcard => {
            res.json(flashcard);
        })
        .catch(err => {});
});

// @route api/flashcards/:id
// @desc Delete a flashcard
// @access Public
router.delete('/:id', (req, res) => {
    Flashcard.findById(req.params.id)
        .then(flashcard =>
            flashcard.remove().then(() => res.json({ success: true }))
        )
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
