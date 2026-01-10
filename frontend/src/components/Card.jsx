import React from 'react';

const Card = ({ children, className = '', hoverable = false }) => {
  const hoverClass = hoverable ?  'hover:shadow-lg transition-shadow duration-200' : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 sm:p-6 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;