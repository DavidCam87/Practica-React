import React from 'react';
import './ShowCount.css';

const ShowCount = ({ count }) => {
  return (
    <div className="show-count">
      <h2>Contador: {count}</h2>
    </div>
  );
}

export default ShowCount;
