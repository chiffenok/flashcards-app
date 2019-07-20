import React from 'react';
import AppNavbar from './components/AppNavbar';
import FlashcardsList from './components/FlashcardsList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className='App'>
            <AppNavbar />
            <FlashcardsList />
        </div>
    );
}

export default App;
