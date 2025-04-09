import React from 'react';

const Remedies = () => {
  const remediesList = [
    { effect: 'Nausea', remedy: 'Ginger tea' },
    { effect: 'Headache', remedy: 'Drink water and rest' },
    { effect: 'Dizziness', remedy: 'Lie down and avoid sudden movements' },
    { effect: 'Fatigue', remedy: 'Rest and hydrate' },
    { effect: 'Dry mouth', remedy: 'Suck on ice chips or hydrate' },
  ];

  return (
    <div className="page">
      <h2>Suggested Remedies</h2>
      <ul>
        {remediesList.map((item, index) => (
          <li key={index}>
            <strong>{item.effect}:</strong> {item.remedy}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Remedies;
