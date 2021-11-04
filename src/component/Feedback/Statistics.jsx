import React from 'react';
import shortid from 'shortid';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p key={shortid.generate()}>
          Good:<span>{good}</span>
        </p>
        <p key={shortid.generate()}>
          Neutral:<span>{neutral}</span>
        </p>
        <p key={shortid.generate()}>
          Bad:<span>{bad}</span>
        </p>
      </div>
      <p>
        Total:<span>{total}</span>
      </p>
      <p>
        Positive feedback:
        <span>{positivePercentage}%</span>
      </p>
    </div>
  );
};
