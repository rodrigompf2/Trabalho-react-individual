import React from 'react';

const AlertMessage = ({ type, message }) => (
  <div className={`alert ${type === 'success' ? 'alert-success' : 'alert-error'}`}>
    {message}
  </div>
);

export default AlertMessage;