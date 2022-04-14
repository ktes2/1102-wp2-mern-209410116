import React from 'react';
import { useAppContext } from '../context/appContext_16';
const Alert_16 = () => {
  const { alertText, alertType } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert_16;
