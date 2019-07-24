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
