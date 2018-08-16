import React from 'react';
import PropTypes from 'prop-types';
import DateRange from './DateRange';
import SelectFilters from './Select';

export class Filters extends React.Component {
    static propTypes = {
        article: PropTypes.array
    };

    render() {
        return (
            <div>
                <SelectFilters articles = { this.props.articles } />
                <DateRange />
            </div>
        );
    }
}