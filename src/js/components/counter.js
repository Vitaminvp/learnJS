import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
    static propTypes = {
        counter: PropTypes.number
    };

    handleIncrement = () => {
        console.log("---", "incrementing");
    }
    render(){
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}