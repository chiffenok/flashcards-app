import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFlashcard } from '../actions/flashcardActions';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input
} from 'reactstrap';

class FlashcardModal extends Component {
    state = {
        isModal: false,
        translationWord: '',
        originalWord: ''
    };

    toggle = () => {
        this.setState({
            isModal: !this.state.isModal
        });
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const newFlashcard = {
            originalWord: this.state.originalWord,
            translationWord: this.state.translationWord
        };
        // Add via addFlashcard action
        this.props.addFlashcard(newFlashcard);
        this.toggle();
    };

    render() {
        return (
            <div>
                <Button
                    color='dark'
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >
                    Add Flashcard
                </Button>
                <Modal isOpen={this.state.isModal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add to Flashcards
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Input
                                    type='text'
                                    name='originalWord'
                                    id='flashcard'
                                    placeholder='originalWord'
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type='text'
                                    name='translationWord'
                                    id='flashcard'
                                    placeholder='translationWord'
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <Button
                                color='dark'
                                style={{ marginTop: '2rem' }}
                                block
                            >
                                Add Flashcard
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flashcard: state.flashcard
});

export default connect(
    mapStateToProps,
    { addFlashcard }
)(FlashcardModal);
