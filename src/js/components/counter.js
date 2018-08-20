import React from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { increment } from "../../AC/index"

class Counter extends React.Component {
    static propTypes = {
        counter: PropTypes.number
    };

    handleIncrement = () => {
        this.props.increment()
    };
    render(){
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}
// function mapStateToProps(state){
//     return {
//         counter: state.count
//     }
// }
// const mapToDispatch = { increment };
// const decorator = connect(mapStateToProps, mapToDispatch);

export default connect((state)=>({counter: state.count}), { increment })(Counter);