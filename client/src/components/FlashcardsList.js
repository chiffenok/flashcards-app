import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

export class FlashcardsList extends Component {
    state = {
        flashcards: [
            { id: uuid(), originalWord: 'test', translationWord: 'probando' },
            { id: uuid(), originalWord: 'leche', translationWord: 'milk' },
            { id: uuid(), originalWord: 'tea', translationWord: 'te' },
            { id: uuid(), originalWord: 'pan', translationWord: 'bread' }
        ]
    };
    render() {
        const { flashcards } = this.state;
        return (
            <Container>
                <Button
                    color='dark'
                    style={{ marginBottom: '2em' }}
                    onClick={() => {
                        const originalWord = prompt('Enter name');
                        if (originalWord) {
                            this.setState(state => ({
                                flashcards: [
                                    ...state.flashcards,
                                    { id: uuid(), originalWord }
                                ]
                            }));
                        }
                    }}
                >
                    Add Flashcard
                </Button>
                <ListGroup>
                    <TransitionGroup className='flashcards-list'>
                        {flashcards.map(({ id, originalWord }) => (
                            <CSSTransition
                                key={id}
                                timeout={500}
                                classNames='fade'
                            >
                                <ListGroupItem>
                                    <Button
                                        className='remove-btn'
                                        color='danger'
                                        size='sm'
                                        onClick={() => {
                                            this.setState(state => ({
                                                flashcards: state.flashcards.filter(flashcard => flashcard.id != id)
                                            }));
                                        }}
                                    >
                                        &times;
                                    </Button>
                                    {originalWord}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default FlashcardsList;
