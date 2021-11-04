import React from 'react';

export const Notification = ({ message, children }) => {
  return (
    <>
      <h2>{message}</h2>
      {children}
    </>
  );
};
