import React, { Component } from 'react';
import shortid from 'shortid';

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
        this.setState(prevState => console.log(prevState.value);
        return {good: prevState.good + 1});
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
        <h1>Please leave feedback</h1>
        <div className="buttons" onClick={this.handleButton}>
          {Object.keys(this.state).map(name => {
            return (
              <button key={shortid.generate()} type="button">
                {name}
              </button>
            );
          })}
        </div>

        <h2>Statistics</h2>
        <div style={{ display: 'flex' }}>
          <div>
            {Object.keys(this.state).map(stat => {
              return <p key={shortid.generate()}>{stat}:</p>;
            })}
          </div>
          <div>
            {Object.values(this.state).map(value => {
              return <p key={shortid.generate()}>{value}</p>;
            })}
          </div>
        </div>
        <p>
          Total:<span>{this.countTotalFeedback()}</span>
        </p>
        <p>
          Positive feedback:
          <span>{this.countPositiveFeedbackPercentage()}%</span>
        </p>
      </>
    );
  }
}
