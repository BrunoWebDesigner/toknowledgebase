import React from 'react';
import './CaseCard.css';

interface CaseCardProps {
  caseItem: {
    id: string;
    title: string;
    tag: string;
    description: string;
  };
  onClick: () => void;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseItem, onClick }) => {
  return (
    <div className="case-card" onClick={onClick}>
      <div className="case-number">{caseItem.id}</div>
      <div className="case-content">
        <h2>{caseItem.title}</h2>
        <p>{caseItem.description}</p>
      </div>
      <div className="case-tag">{caseItem.tag}</div>
    </div>
  );
};

export default CaseCard;
