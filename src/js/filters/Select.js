import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';

export default class SelectFilters extends React.Component {
    state = {
        selectedOption: null
    };
    static propTypes = {
        article: PropTypes.array
    };
    static defaultProps = {
        articles: []
    };
    changeSelection = selectedOption => this.setState({ selectedOption });
    render(){
        const option = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return <Select options={option} value={this.state.selectedOption} onChange={this.changeSelection} multi/>
    }
}