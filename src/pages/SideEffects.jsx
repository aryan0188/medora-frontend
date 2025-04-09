import React from 'react';

const SideEffects = () => {
  const dummySideEffects = [
    'Nausea',
    'Headache',
    'Dizziness',
    'Fatigue',
    'Dry mouth'
  ];

  return (
    <div className="page">
      <h2>Possible Side Effects</h2>
      <ul>
        {dummySideEffects.map((effect, index) => (
          <li key={index}>{effect}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideEffects;
