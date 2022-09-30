import PropTypes from 'prop-types';
import { StatisticsStyled } from "components/Statistics/Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return <StatisticsStyled>
                <li>Good: <span>{ good }</span></li>
                <li>Neutral: <span>{ neutral }</span></li>
                <li>Bad: <span>{ bad }</span></li>
                <li>Total: <span>{ total }</span></li>
                <li>Positive feedback: <span>{ positivePercentage }%</span></li>
            </StatisticsStyled>;      
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}