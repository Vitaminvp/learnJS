import React from 'react';
import { ReactCSSTransitionGroup } from 'react-transition-group';
import Comments from './comments';
import PropTypes from 'prop-types';

import './transition.css';

export default class Article extends React.PureComponent {
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
    // shouldComponentUpdate(nextProps){
    //     return nextProps.isOpen !== this.props.isOpen;
    // }
    render(){
        console.log(this.props.article.id, "render article");
        const text = this.props.isOpen?this.props.article.text:null;
        const comments = this.props.article.comments;
        let comment = this.props.isOpen?<Comments com={comments}/>:null;
        return <div>
                    <h3 onClick={this.toggleOpen}>{this.props.article.title}</h3>
                    <button onClick={this.toggleOpen}>{!this.props.isOpen?'open':'close'}</button>

            <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <div>{text}</div>
            </ReactCSSTransitionGroup>

                    <br />
                    { comment }

                </div>
    }
}

