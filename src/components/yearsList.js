import React, {Component} from 'react';
import StyledYearList from './StyledYearsList';

class YearList extends Component {
    render () {
        return (
            <StyledYearList>
                {this.props.years.map(year => <li key={year}>{year}</li>)}
            </StyledYearList>
        );
    }   
}

export default YearList;