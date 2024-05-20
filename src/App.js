import React from 'react';
import ReviewList from './components/ReviewList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Review Sentiment Analysis</h1>
      <ReviewList />
    </div>
  );
};

export default App;
