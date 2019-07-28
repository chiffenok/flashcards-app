import {
    GET_FLASHCARDS,
    ADD_FLASHCARD,
    DELETE_FLASHCARD
} from '../actions/types';

export const getFlashcards = () => {
    return {
        type: GET_FLASHCARDS
    };
};

export const deleteFlashcard = id => {
    return {
        type: DELETE_FLASHCARD,
        payload: id
    };
};

export const addFlashcard = flashcard => {
    return {
        type: ADD_FLASHCARD,
        payload: flashcard
    };
};