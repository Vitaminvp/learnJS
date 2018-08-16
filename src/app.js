import * as React from 'react';
import ArticleList from './js/components/articleList';
import { articles } from './fixtures';
import './js/components/article.css';
import {UserForm} from "./js/components/userForm";
import {Filters} from './js/filters';


export default class App extends React.Component{
    render(){
        return <div>
          Name:
            <UserForm/>
            <Filters articles = {articles} />
            <ArticleList articles={articles} defaultId = {articles[0].id}/>
        </div>
    }
}
