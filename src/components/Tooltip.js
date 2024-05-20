import React, { useState } from 'react';

const sentimentColors = {
  Positive: '#D9F2DD',
  Negative: '#F2DBD9',
  Mixed: '#e8bd6d3d',
  Neutral: '#eaf09b6b'
};

const Tooltip = ({ children, topic, sentiment }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: sentimentColors[sentiment], position: 'relative', cursor: 'pointer' }}
    >
      {children}
      {showTooltip && (
        <div className="tooltip">
          {topic}
        </div>
      )}
    </span>
  );
};

export default Tooltip;
