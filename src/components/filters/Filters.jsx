import { useState } from 'react';
import { StyledFilters } from './filters.styles';

const Filters = ({ onFilterChange }) => {
  const [searchBar, setSearchBar] = useState('');
  const [onlyActive, setOnlyActive] = useState(false);
  const [sortByName, setSortByName] = useState('default');

  const handleSearchChange = e => {
    setSearchBar(e.target.value);
    onFilterChange(e.target.value, onlyActive, sortByName);
  };

  const handleCheckboxChange = () => {
    setOnlyActive(!onlyActive);
    onFilterChange(searchBar, !onlyActive, sortByName);
  };

  const handleSortChange = e => {
    const sortBy = e.target.value; // recibe 'default' o 'name'
    setSortByName(sortBy);
    onFilterChange(searchBar, onlyActive, sortBy);
  };

  return (
    <StyledFilters>
      <input type='text' placeholder='Buscar usuarios...' value={searchBar} onChange={handleSearchChange} />
      <div>
        <label htmlFor=''>Solo activos</label>
        <input type='checkbox' checked={onlyActive} onChange={handleCheckboxChange} />
      </div>
      <select value={sortByName} onChange={handleSortChange}>
        <option value='default'>Por defecto</option>
        <option value='name'>Por nombre</option>
      </select>
    </StyledFilters>
  );
};

export default Filters;
