import React from 'react';
import Article from './article';
import PropTypes from 'prop-types';
import accordion from './../decorators/accordion';

import 'react-day-picker/lib/style.css';

class ArticleList extends React.Component {
    constructor(props){
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDays: [],
        };
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
    handleDayClick(day, { selected }) {
        const { selectedDays } = this.state;
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }
        this.setState({ selectedDays });
    }
    setRef = ref => {
        // console.log(ref);
    };
    render(){
        const articles = this.props.articles.map((article) => <li key={article.id}><Article  article={article} isOpen = {article.id == this.props.id} toggleOpen = {this.props.handleClick} ref = { this.setRef } /></li>);
        return (
                    <ul>
                        {articles}
                    </ul>
                )

    }
}
export default accordion(ArticleList);