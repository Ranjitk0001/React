import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Demo = () => {
  return (
    <div className="card" style={{ width: '17rem', height: '17rem', transform: 'translateZ(100px)' }}>
      <div className="card-body">
        <h5 className="card-title">3D Transform</h5>
        <p className="card-text">This card has a translateZ transformation applied to it.</p>
      </div>
    </div>
  );
};

export default Demo;
