import * as React from 'react';
import ArticleList from './js/components/articleList';
import { articles } from './fixtures';
import './js/components/article.css';
import {UserForm} from "./js/components/userForm";
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class App extends React.Component{
    state = {
        selectedOption: null
    };
    changeSelection = selectedOption => this.setState({ selectedOption });
    render(){
        const option = articles.map(article => ({
                    label: article.title,
                    value: article.id
        }));
        return <div>
          Name: <UserForm/>
            <Select options={option} value={this.state.selectedOption} onChange={this.changeSelection} multinpm/>
          <ArticleList articles={articles}/>
        </div>
    }
}
