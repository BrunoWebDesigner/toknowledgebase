import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import CaseCard from './CaseCard';
import CaseDetail from './CaseDetail'; // Import CaseDetail component
import './CaseListPage.css';

interface Case {
  id: string;
  title: string;
  tag: string;
  description: string;
}

const CaseListPage: React.FC = () => {
  const [cases, setCases] = useState<Case[]>([]);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  useEffect(() => {
    // Fetch cases from the database
    fetch('/api/cases') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setCases(data));
  }, []);

  const handleSearch = (query: string) => {
    // Implement your search logic here
    console.log('Search query:', query);
  };

  const handleCaseClick = (caseItem: Case) => {
    setSelectedCase(caseItem);
  };

  return (
    <div className="case-list-page">
      <Sidebar />
      <div className="main-content">
        <SearchBar onSearch={handleSearch} />
        <div className="case-list">
          {cases.map((caseItem) => (
            <CaseCard
              key={caseItem.id}
              caseItem={caseItem}
              onClick={() => handleCaseClick(caseItem)}
            />
          ))}
        </div>
        {selectedCase && (
          <CaseDetail
            caseItem={selectedCase}
            onClose={() => setSelectedCase(null)}
          />
        )}
      </div>
    </div>
  );
};

export default CaseListPage;
