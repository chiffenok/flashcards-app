import axios from 'axios';
import {
    GET_FLASHCARDS,
    ADD_FLASHCARD,
    DELETE_FLASHCARD,
    FLASHCARDS_LOADING
} from '../actions/types';

export const getFlashcards = () => dispatch => {
    dispatch(setFlashcardsLoading());
    axios.get('api/flashcards').then(res => {
        dispatch({
            type: GET_FLASHCARDS,
            payload: res.data
        });
    });

    // return {
    //     type: GET_FLASHCARDS
    // };
};

export const addFlashcard = flashcard => dispatch => {
    axios.post('api/flashcards', flashcard).then(res => {
        dispatch({
            type: ADD_FLASHCARD,
            payload: res.data
        });
    });
    // return {
    //     type: ADD_FLASHCARD,
    //     payload: flashcard
    // };
};

export const deleteFlashcard = id => dispatch => {
    axios.delete(`/api/flashcards/${id}`).then(res => {
        dispatch({
            type: DELETE_FLASHCARD,
            payload: id
        });
    });
    //return {
    //    type: DELETE_FLASHCARD,
    //    payload: id
    //};
};

export const setFlashcardsLoading = () => {
    return {
        type: FLASHCARDS_LOADING
    };
};
