import React from 'react';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter } from '../../store/actions/counter'

import './CounterContainer.css'

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container">
                <div>
                    <button onClick={() => this.props.decrementCounter()}>-</button>
                </div>
                <div>
                    <label>{this.props.counter}</label>
                </div>
                <div>
                    <button onClick={() => this.props.incrementCounter()}>+</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter.value
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCounter: () => dispatch(incrementCounter()),
        decrementCounter: () => dispatch(decrementCounter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);