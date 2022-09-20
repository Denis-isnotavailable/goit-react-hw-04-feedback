import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FeedbackOptionsStyled } from "components/FeedbackOptions/FeedbackOptions.styled";

export class FeedbackOptions extends Component {

    render() {
        const { onLeaveFeedback, onMouseDown, onMouseUp } = this.props;

        return <FeedbackOptionsStyled>
                <li><button type="button" name="good" onClick={ onLeaveFeedback } onMouseDown={onMouseDown} onMouseUp={onMouseUp}>Good</button></li>
                <li><button type="button" name="neutral" onClick={ onLeaveFeedback } onMouseDown={onMouseDown} onMouseUp={onMouseUp}>Neutral</button></li>
                <li><button type="button" name="bad" onClick={ onLeaveFeedback } onMouseDown={onMouseDown} onMouseUp={onMouseUp}>Bad</button></li>
            </FeedbackOptionsStyled>
    }
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
}