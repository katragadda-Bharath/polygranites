import React, { useState } from 'react';
import './Designs.css';
import { FaDownload } from 'react-icons/fa';

// Import all images and PDFs from the Designs folder
const importAll = (r) => {
  return r.keys().map((key) => ({
    key,
    url: r(key),
  }));
};

const Portfolio = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Get all media files from the Designs folder
  const mediaItems = importAll(require.context('../Designs', false, /\.(png|jpe?g|svg|gif|webp|pdf)$/))
    .map(({ key, url }, index) => {
      const filename = key.replace('./', '').replace(/\.[^/.]+$/, '');
      const fileExtension = key.split('.').pop().toLowerCase();
      const isPDF = fileExtension === 'pdf';

      return {
        id: index + 1,
        type: isPDF ? 'pdf' : 'image',
        url: url,
        title: filename,
        extension: fileExtension
      };
    });

  const handleMediaClick = (item) => {
    if (item.type === 'pdf') {
      // Create a temporary link element and trigger download
      const link = document.createElement('a');
      link.href = item.url;
      link.download = `${item.title}.${item.extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setSelectedMedia(item);
    }
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
            {item.type === 'pdf' ? (
              <div className="pdf-button">
                <button className="download-button">
                  {item.title}
                  <FaDownload className="download-icon" />
                </button>
              </div>
            ) : (
              <>
                <img src={item.url} alt={item.title} className="portfolio-media" />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {selectedMedia && selectedMedia.type === 'image' && (
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