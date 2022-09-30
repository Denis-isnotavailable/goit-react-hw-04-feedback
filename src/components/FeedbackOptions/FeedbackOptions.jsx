import PropTypes from 'prop-types';
import { FeedbackOptionsStyled } from "components/FeedbackOptions/FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback, onMouseDown, onMouseUp }) => {

    return <FeedbackOptionsStyled>

            {options.map((option, index) => {
                const buttonName = option[0].toUpperCase() + option.substring(1);
                return <li key={index}>
                    <button type="button"
                        name={option}
                        onClick={onLeaveFeedback}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                    >
                        {buttonName}
                    </button>
                </li>;
            })}
            </FeedbackOptionsStyled>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onMouseUp: PropTypes.func.isRequired,
}