import React from 'react';
import Article from './article';

export default class ArticleList extends React.Component {
    constructor(){
        super();
        this.state={
            articleOpenId: null
        }
    }
    toggleOpen = (id) =>{
        if(this.state.articleOpenId == id){
            this.setState({
                articleOpenId: null
            });
        } else {
            this.setState({
                articleOpenId: id
            });
        }
    }
    render(){

        const articles = this.props.articles.map((article) => <li key={article.id}><Article article={article} isOpen = {article.id == this.state.articleOpenId} toggleOpen = {this.toggleOpen}/></li>);
        return <ul>
                {articles}
               </ul>
    }
}