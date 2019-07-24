import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getFlashcards } from '../actions/flashcardActions';

export class FlashcardsList extends Component {
    componentDidMount() {
        this.props.getFlashcards();
    }

    handleAddFlashcard = () => {
        const originalWord = prompt('Enter name');
        if (originalWord) {
            this.setState(state => ({
                flashcards: [...state.flashcards, { id: uuid(), originalWord }]
            }));
        }
    };

    handleDeleteFlashcard = curId => {
        this.setState(state => ({
            flashcards: state.flashcards.filter(
                flashcard => flashcard.id !== curId
            )
        }));
    };

    render() {
        const { flashcards } = this.props.flashcard;
        return (
            <Container>
                <Button
                    color='dark'
                    style={{ marginBottom: '2em' }}
                    onClick={this.handleAddFlashcard}
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
                                        onClick={() =>
                                            this.handleDeleteFlashcard(id)
                                        }
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

FlashcardsList.propTypes = {
    getFlashcards: PropTypes.func.isRequired,
    flashcard: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    flashcard: state.flashcard
});

export default connect(
    mapStateToProps,
    { getFlashcards }
)(FlashcardsList);
