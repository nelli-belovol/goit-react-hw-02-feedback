import React, { Component } from 'react';

import { Statistics } from './Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions.jsx';
import { Section } from './Section.jsx';
import { Notification } from './Notification.jsx';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = e => {
    const { target } = e; // сохраняем в переменную, если нужно при ассинхронном запросе достучаться до таргета (иначе null)
    switch (target.textContent) {
      case 'good':
        this.setState(prevState => {
          return { good: prevState.good + 1 };
        });
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        break;
    }
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let percent = 0;
    if (this.countTotalFeedback() !== 0) {
      return (percent = Math.floor((good / this.countTotalFeedback()) * 100));
    }
    return percent;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleButton}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
