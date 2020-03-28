import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getFishes, deleteFish } from '../actions/fishActions';
import PropTypes from 'prop-types';

class FishList extends Component {

    componentDidMount() {
        this.props.getFishes();
    }

    onDeleteClick = (id) => {
        this.props.deleteFish(id);
    }

    render() {
        
        const { fishes } = this.props.fish;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className='fish-list'>
                        {fishes.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

FishList.propTypes = {
    getFishes: PropTypes.func.isRequired,
    fish: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    fish: state.fish
});

export default connect(
    mapStateToProps, 
    { getFishes, deleteFish }
    )(FishList);


