import axios from 'axios';
import {
    GET_FLASHCARDS,
    ADD_FLASHCARD,
    DELETE_FLASHCARD,
    FLASHCARDS_LOADING
} from '../actions/types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getFlashcards = () => dispatch => {
    dispatch(setFlashcardsLoading());
    axios
        .get('api/flashcards')
        .then(res =>
            dispatch({
                type: GET_FLASHCARDS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addFlashcard = flashcard => (dispatch, getState) => {
    axios
        .post('api/flashcards', flashcard, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_FLASHCARD,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteFlashcard = id => (dispatch, getState) => {
    axios
        .delete(`/api/flashcards/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_FLASHCARD,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setFlashcardsLoading = () => {
    return {
        type: FLASHCARDS_LOADING
    };
};
