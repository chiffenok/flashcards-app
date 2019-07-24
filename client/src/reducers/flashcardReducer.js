import {
    GET_FLASHCARDS,
    ADD_FLASHCARD,
    DELETE_FLASHCARD
} from '../actions/types';
import uuid from 'uuid';

const initialState = {
    flashcards: [
        { id: uuid(), originalWord: 'test', translationWord: 'probando' },
        { id: uuid(), originalWord: 'leche', translationWord: 'milk' },
        { id: uuid(), originalWord: 'tea', translationWord: 'te' },
        { id: uuid(), originalWord: 'pan', translationWord: 'bread' }
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_FLASHCARDS:
            return {
                ...state
            };
        default:
            return state;
    }
}
