import React from 'react';
import AppNavbar from './components/AppNavbar';
import FlashcardsList from './components/FlashcardsList';
import FlashcardModal from './components/FlashcardModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <AppNavbar />
                <Container>
                    <FlashcardModal />
                    <FlashcardsList />
                </Container>
            </div>
        </Provider>
    );
}

export default App;
