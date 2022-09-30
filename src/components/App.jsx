import { useState } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleClick = e => {    
    const { name } = e.currentTarget;    

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
    
      default:
        break;
    }
  }  

  function countTotalFeedback() {    
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {    
    if(good === 0) {
      return 0;
    } else if (neutral === 0 && bad === 0) {
      return 100;
    }
    return Math.round(good * 100 / countTotalFeedback());
  }

  return (
      <>
        <h1 style={{ padding: "12px" }}>Cafe Expresso</h1>

        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
        </Section>        
         
        <Section title="Statistics">
          { !good && !neutral && !bad ?
            <Notification message="There is no feedback" /> :
            <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} /> }          
        </Section>
      </>      
      );
};


const handleMouseDown = e => {
    e.currentTarget.style.backgroundColor = "#00bbff";
  }

  const handleMouseUp = e => {
    e.currentTarget.style.backgroundColor = "#e0e0e0";
  }