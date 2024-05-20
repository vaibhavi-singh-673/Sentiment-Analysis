import React from 'react';
import Tooltip from './Tooltip';

const sentimentColors = {
  Positive: '#D9F2DD',
  Negative: '#F2DBD9',
  Mixed: '#e8bd6d3d',
  Neutral: '#eaf09b6b'
};

const ReviewHighlighter = ({ content, analytics }) => {
  const getHighlightedContent = () => {
    let highlightedContent = [];
    let lastIndex = 0;

    analytics.forEach(({ highlight_indices, sentiment, topic }) => {
      highlight_indices.forEach(([start, end]) => {
        if (start > lastIndex) {
          highlightedContent.push(
            <span key={lastIndex}>{content.slice(lastIndex, start)}</span>
          );
        }
        highlightedContent.push(
          <Tooltip key={start} content={content.slice(start, end)} topic={topic} sentiment={sentiment}>
            {content.slice(start, end)}
          </Tooltip>
        );
        lastIndex = end;
      });
    });

    if (lastIndex < content.length) {
      highlightedContent.push(
        <span key={lastIndex}>{content.slice(lastIndex)}</span>
      );
    }

    return highlightedContent;
  };

  return <p>{getHighlightedContent()}</p>;
};

export default ReviewHighlighter;
