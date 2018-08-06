import React from 'react';
import Comments from './comments';
import PropTypes from 'prop-types';

export default class Article extends React.Component {
    static defaultProps={
        comments: []
    };
    static propTypes = {
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        article: PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
            comments: PropTypes.array
        })
    };
    toggleOpen=() => {
        this.props.toggleOpen(this.props.article.id);
    };

    render(){
        const text = this.props.isOpen?this.props.article.text:null;
        const comments = this.props.article.comments;
        let comment = this.props.isOpen?<Comments com={comments}/>:null;
        return <div>
                    <h3 onClick={this.toggleOpen}>{this.props.article.title}</h3>
                    <button onClick={this.toggleOpen}>{!this.props.isOpen?'open':'close'}</button>
                    <div>{text}</div>
                    <br />
                    { comment }
                </div>
    }
}

