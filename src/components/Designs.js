import React, { useState } from 'react';
import './Designs.css';

// Import all images from the Designs folder
const importAll = (r) => {
  return r.keys().map((key) => ({
    key, // Original file path (e.g., './image1.png')
    url: r(key), // Resolved URL for the file
  }));
};

const Portfolio = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Get all images from the Designs folder
  const mediaItems = importAll(require.context('../Designs', false, /\.(png|jpe?g|svg|gif|webp)$/))
    .map(({ key, url }, index) => {
      // Extract filename from the key (e.g., './image1.png' -> 'image1')
      const filename = key.replace('./', '').replace(/\.[^/.]+$/, '');

      return {
        id: index + 1,
        type: 'image',
        url: url,
        title: filename
      };
    });

  const handleMediaClick = (item) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Our Designs</h2>
      <div className="portfolio-grid">
        {mediaItems.map((item) => (
          <div key={item.id} className="portfolio-item" onClick={() => handleMediaClick(item)}>
            <img src={item.url} alt={item.title} className="portfolio-media" />
            <div className="portfolio-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedMedia && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img src={selectedMedia.url} alt={selectedMedia.title} className="modal-media" />
            <div className="modal-info">
              <h3>{selectedMedia.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;