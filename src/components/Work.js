import React, { useState } from 'react';
import './Designs.css';

// Helper function to import all media files from the Work folder
const importAll = (r) => {
  return r.keys().map((key) => ({
    key, // Original file path (e.g., './1.jpg' or './video1.mp4')
    url: r(key), // Resolved URL for the file
  }));
};

const Work = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Get all images and videos from the Work folder
  const mediaItems = importAll(
    require.context(
      '../Work',
      false,
      /\.(png|jpe?g|svg|gif|webp|mp4|mov|webm)$/
    )
  ).map(({ key, url }, index) => {
    // Extract filename from the key (e.g., './1.jpg' -> '1' or './video1.mp4' -> 'video1')
    const filename = key.replace('./', '').replace(/\.[^/.]+$/, '');

    // Determine the media type based on the file extension
    const type = /\.(png|jpe?g|svg|gif|webp)$/i.test(key) ? 'image' : 'video';

    return {
      id: index + 1,
      type: type,
      url: url,
      title: filename,
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
      <h2 className="portfolio-title">Our Work</h2>
      <div className="portfolio-grid">
        {mediaItems.map((item) => (
          <div key={item.id} className="portfolio-item" onClick={() => handleMediaClick(item)}>
            {item.type === 'image' ? (
              <img src={item.url} alt={item.title} className="portfolio-media" />
            ) : (
              <video
                src={item.url}
                className="portfolio-media"
                controls
                muted
                loop
                playsInline
              />
            )}
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
            {selectedMedia.type === 'image' ? (
              <img src={selectedMedia.url} alt={selectedMedia.title} className="modal-media" />
            ) : (
              <video
                src={selectedMedia.url}
                className="modal-media"
                controls
                autoPlay
                loop
                playsInline
              />
            )}
            <div className="modal-info">
              <h3>{selectedMedia.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;