import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getFlashcards, deleteFlashcard } from '../actions/flashcardActions';

export class FlashcardsList extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

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
                                        {this.props.isAuthenticated ? (
                                            <Button
                                                className='remove-btn'
                                                color='danger'
                                                size='sm'
                                                onClick={this.handleDeleteFlashcard.bind(
                                                    this,
                                                    _id
                                                )}
                                            >
                                                &times;
                                            </Button>
                                        ) : null}
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

const mapStateToProps = state => ({
    flashcard: state.flashcard,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getFlashcards, deleteFlashcard }
)(FlashcardsList);
