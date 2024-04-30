import React from 'react';
import './Thumbnail.css'; // Import CSS file for styling

function Thumbnail({ imgSrc }) {
  return (
    <div className="thumbnail-container">
      <img className="thumbnail-image" src={imgSrc} alt="Thumbnail" />
    </div>
  );
}

export default Thumbnail;
