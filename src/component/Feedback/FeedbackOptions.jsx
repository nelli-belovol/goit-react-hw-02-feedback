import React from 'react';
import shortid from 'shortid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="buttons" onClick={onLeaveFeedback}>
      {Object.keys(options).map(name => {
        return (
          <button key={shortid.generate()} type="button">
            {name}
          </button>
        );
      })}
    </div>
  );
};
