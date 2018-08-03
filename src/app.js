import * as React from 'react';
import { render } from 'react-dom';
import ArticleList from './js/components/articleList';
import { articles } from './fixtures';
import './js/components/article.css';

render(<ArticleList articles={articles}/>, document.getElementById('container'));