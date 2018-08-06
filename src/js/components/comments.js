import React from 'react';
import PropTypes from 'prop-types';
import WrappedComponent from './../decorators/toggleOpen';
import  DPicker from './daypicker';
import 'react-day-picker/lib/style.css';
class Comments extends React.Component {
    constructor() {
        super();
    }
    static propTypes = {
        comments: PropTypes.array.isRequired,
        com: PropTypes.array,
        comList: PropTypes.array.isRequired,
        isOpen: PropTypes.bool.isRequired,
        handleClick: PropTypes.func.isRequired,
    };
    render(){
        const comments = this.props.com;
        let comList=[];
        if(!comments){
            return null;
        }
        comList = comments.map((item) => <li key={item.id}>{item.text}<strong>by {item.user}</strong></li>);
        const comText = this.props.isOpen? <div><DPicker/>comList</div> : null;

        return <div>
            <button onClick={this.props.handleClick.bind(this)}>{!this.props.isOpen?'show':' hide '}</button>

            <ol>
                {comText}
            </ol>
        </div>
    }
}
Comments.defaultProps = {
    comList: [],
    comments: []
};

export default WrappedComponent(Comments);