// src/components/DropdownFilter.tsx
import React, { useState } from 'react';
import '../styles/DropdownFilter.css';

interface DropdownFilterProps {
  onFilterChange: (filter: string) => void;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    onFilterChange(selectedFilter);
  };

  return (
    <div className="dropdown-filter">
      <select value={filter} onChange={handleChange}>
        <option value="">Case Type</option>
        <option value="operator">Operator Case</option>
        <option value="provider">Provider Case</option>
        <option value="other">Other Case</option>
      </select>
    </div>
  );
};

export default DropdownFilter;
