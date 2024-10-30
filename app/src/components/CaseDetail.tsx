import React, { useState } from 'react';
import './CaseDetail.css';

interface CaseDetailProps {
  caseItem: {
    id: string;
    title: string;
    tag: string;
    description: string;
    // Add more detailed fields as needed
  };
  onClose: () => void;
}

const CaseDetail: React.FC<CaseDetailProps> = ({ caseItem, onClose }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    // Toggle favorite status and update in the DB
    setIsFavorite(!isFavorite);
    fetch(`/api/favorites/${caseItem.id}`, {
      method: isFavorite ? 'DELETE' : 'POST'
    });
  };

  return (
    <div className="case-detail">
      <button onClick={onClose} className="back-button">← Back</button>
      <div className="case-detail-content">
        <div className="case-header">
          <h1>{caseItem.title}</h1>
          <button onClick={handleFavoriteToggle} className="favorite-button">
            {isFavorite ? '★' : '☆'}
          </button>
        </div>
        <p>{caseItem.description}</p>
        <span className={`tag ${caseItem.tag.toLowerCase()}`}>{caseItem.tag}</span>
        {/* Display other detailed info here */}
      </div>
    </div>
  );
};

export default CaseDetail;
