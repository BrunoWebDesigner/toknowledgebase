// src/components/Home.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import DropdownFilter from './DropdownFilter';
import '../styles/Home.css';
import hub88Big from '../images/hub88Big.png';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Call a search API or filter function here with query and filter
    console.log('Searching for:', query, 'with filter:', filter);
  };

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
    // Update search results based on new filter
    console.log('Filter changed to:', filter);
  };

  return (
    <div className="home-page">
      <Sidebar />
      <main className="main-content">
        <h1>TechOps Knowledge Base V 2.03</h1>
        <div className="logo">
          <img src={hub88Big} alt="Hub88" />
        </div>
        <div className="search-area">
          <SearchBar onSearch={handleSearch} />
          <DropdownFilter onFilterChange={handleFilterChange} />
        </div>
      </main>
    </div>
  );
};

export default Home;
