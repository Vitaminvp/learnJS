import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Comments from './comments';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './transition.css';
import {deleteArticle} from './../../AC';
class Article extends React.PureComponent {
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
    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
        console.log("delete");
    };
    render(){
        // console.log(this.props.article.id, "render article");
        const text = this.props.isOpen?this.props.article.text:null;
        const comments = this.props.article.comments;
        let comment = this.props.isOpen?<Comments com={comments}/>:null;
        return <div>
            <CSSTransitionGroup
                transitionName="article"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
            >

                <h3 onClick={this.toggleOpen}>{this.props.article.title}</h3>
            </CSSTransitionGroup>

                    <button onClick={this.toggleOpen}>{!this.props.isOpen?'open':'close'}</button>
                    <button onClick={this.handleDelete}>Delete</button>
            <CSSTransitionGroup
                transitionName="article"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                component = "div"
            >
            <div>{ text }</div>
            </CSSTransitionGroup>


                 <br />
                { comment }
                </div>
    }
}
export default connect(null, {deleteArticle})(Article);
