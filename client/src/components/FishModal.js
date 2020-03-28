import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addFish } from '../actions/fishActions';


class FishModal extends Component {
    state = {
        modal: false,
        name: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newFish = {
            name: this.state.name
        };

        //add fish via addFish action
        this.props.addFish(newFish);

        //close modal
        this.toggle();
    };

    render() {
        return(
            <div>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}
                >Add Fish</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add To Fish List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="fish">Fish</Label>
                                <Input
                                    type="test"
                                    name="name"
                                    id="fish"
                                    placeholder="Add your fish"
                                    onChange={this.onChange}
                                    ></Input>
                                    <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                    >Add Fish
                                    </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    fish: state.fish
});

export default connect(
    mapStateToProps, 
    { addFish }
    )(FishModal);


