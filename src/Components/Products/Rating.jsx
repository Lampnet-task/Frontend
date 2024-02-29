import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const generateStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} />);
    }

    // Add half star if necessary
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="star-half" />);
    }

    return stars;
  };

  return (
    <div className="flex text-yellow-400">
      {generateStars(rating)}
    </div>
  );
};

export default Rating;
