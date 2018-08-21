import * as React from 'react';
import ArticleList from './js/components/articleList';
import './js/components/article.css';
import {UserForm} from './js/components/userForm';
import {Filters} from './js/filters';
import Counter from './js/components/counter';


export default class App extends React.Component{
	render(){
		return <div>
                <Counter/>
                <UserForm/>
                <Filters articles = {[]} />
                <ArticleList/>
		    </div>;
	}
}
