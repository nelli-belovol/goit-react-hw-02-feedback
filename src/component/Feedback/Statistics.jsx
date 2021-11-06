import React from 'react';
import shortid from 'shortid';
import PropTypes from "prop-types";

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

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};