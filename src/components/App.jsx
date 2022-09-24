import React, { Component } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = e => {    
    const { name } = e.currentTarget;    
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  }

  handleMouseDown = e => {
    e.currentTarget.style.backgroundColor = "#00bbff";
  }

  handleMouseUp = e => {
    e.currentTarget.style.backgroundColor = "#e0e0e0";
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    if(good === 0) {
      return 0;
    } else if (neutral === 0 && bad === 0) {
      return 100;
    }
    return Math.round(good * 100 / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1 style={{ padding: "12px" }}>Cafe Expresso</h1>

        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} />
        </Section>        
         
        <Section title="Statistics">
          { !good && !neutral && !bad ?
            <Notification message="There is no feedback" /> :
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> }          
        </Section>
      </>      
      );
  }
};