import { useState } from 'react';
import Filters from './components/filters/Filters';
import PageTitle from './components/pageTitle/PageTitle';
import UserList from './components/userList/UserList';
import { GlobalStyles } from './styles/GlobalStyles';
import { USERS } from './constants/users';

const App = () => {
  const [filteredUsers, setFilteredUsers] = useState(USERS);

  const handleFilterChange = (searchBar, onlyActive, sortByName) => {
    let filtered = [...USERS];

    // Filtro  por nombre o username
    if (searchBar) {
      filtered = filtered.filter(
        user =>
          user.name.toLowerCase().includes(searchBar.toLowerCase()) ||
          user.username.toLowerCase().includes(searchBar.toLowerCase())
      );
    }

    // Filtro Solo activos
    if (onlyActive) {
      filtered = filtered.filter(user => user.active);
    }

    // Ordenar por nombre solo si 'sortByName' es 'name'
    if (sortByName === 'name') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredUsers(filtered); // Actualiza el estado con los usuarios filtrados
  };

  return (
    <>
      <GlobalStyles />
      <PageTitle title='Listado de usuarios' />
      <Filters onFilterChange={handleFilterChange} />
      <UserList users={filteredUsers} />
    </>
  );
};

export default App;
