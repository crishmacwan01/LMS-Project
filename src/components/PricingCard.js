import React from 'react';

/**
 * PricingCard component
 * Props:
 *  - title: string – name of the plan
 *  - price: string – price display (e.g., "$19/mo")
 *  - features: string[] – list of feature descriptions
 *  - onSelect: () => void – callback when the button is clicked
 */
const PricingCard = ({ title, price, features = [], onSelect }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-primary-background border border-primary-text">
      <div className="p-6 flex flex-col h-full">
        <h2 className="text-xl font-semibold text-primary-text mb-2 text-center">
          {title}
        </h2>
        <p className="text-3xl font-bold text-primary-text text-center mb-4">
          {price}
        </p>
        <ul className="flex-1 mb-6 space-y-2">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-center text-primary-text">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={onSelect}
          className="mt-auto w-full bg-primary-text text-primary-background font-medium py-2 px-4 rounded hover:bg-primary-background hover:text-primary-text border border-primary-text transition-colors"
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
