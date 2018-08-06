import React from 'react';
import Article from './article';
import PropTypes from 'prop-types';
import accordion from './../decorators/accordion';

class ArticleList extends React.Component {
    constructor(){
        super();

    }
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
        }),
        handleClick: PropTypes.func.isRequired,
        id: PropTypes.string

    };

    setRef = ref => {
        console.log(ref);
    };
    render(){
        const articles = this.props.articles.map((article) => <li key={article.id}><Article article={article} isOpen = {article.id == this.props.id} toggleOpen = {this.props.handleClick} ref = { this.setRef } /></li>);
        return <ul>
                {articles}
               </ul>
    }
}
export default accordion(ArticleList);