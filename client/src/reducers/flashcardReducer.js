import {
    GET_FLASHCARDS,
    ADD_FLASHCARD,
    DELETE_FLASHCARD,
    FLASHCARDS_LOADING
} from '../actions/types';

const initialState = {
    flashcards: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_FLASHCARDS:
            return {
                ...state,
                flashcards: action.payload, 
                loading: false
            };
        case DELETE_FLASHCARD:
            return {
                ...state,
                flashcards: state.flashcards.filter(
                    flashcard => flashcard._id !== action.payload
                )
            };
        case ADD_FLASHCARD:
            return {
                ...state,
                flashcards: [action.payload, ...state.flashcards]
            };
        case FLASHCARDS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
