import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getFlashcards, deleteFlashcard } from '../actions/flashcardActions';

export class FlashcardsList extends Component {
    componentDidMount() {
        this.props.getFlashcards();
    }

    handleAddFlashcard = () => {
        const originalWord = prompt('Enter name');
        if (originalWord) {
            this.setState(state => ({
                flashcards: [
                    ...state.flashcards,
                    { id: 'uuid()', originalWord }
                ]
            }));
        }
    };

    handleDeleteFlashcard = curId => {
        this.props.deleteFlashcard(curId);
    };

    render() {
        const { flashcards } = this.props.flashcard;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className='flashcards-list'>
                        {flashcards.map(
                            ({ _id, originalWord, translationWord }) => (
                                <CSSTransition
                                    key={_id}
                                    timeout={500}
                                    classNames='fade'
                                >
                                    <ListGroupItem>
                                        <Button
                                            className='remove-btn'
                                            color='danger'
                                            size='sm'
                                            onClick={() =>
                                                this.handleDeleteFlashcard(_id)
                                            }
                                        >
                                            &times;
                                        </Button>
                                        {originalWord} - {translationWord}
                                    </ListGroupItem>
                                </CSSTransition>
                            )
                        )}
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
    { getFlashcards, deleteFlashcard }
)(FlashcardsList);
