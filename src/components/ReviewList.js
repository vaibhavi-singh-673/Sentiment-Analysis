import React, { useState, useEffect } from 'react';
import ReviewHighlighter from './ReviewHighlighter';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviewsData.json')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <h3>{review.reviewer_name}</h3>
          <p>{review.date}</p>
          <img src={review.source.icon} alt={review.source.name} />
          <ReviewHighlighter content={review.content} analytics={review.analytics} />
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
