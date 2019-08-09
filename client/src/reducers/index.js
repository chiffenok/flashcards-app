import { combineReducers } from 'redux';
import flashcardReducer from './flashcardReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    flashcard: flashcardReducer,
    error: errorReducer,
    auth: authReducer
});
