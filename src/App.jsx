import Filters from './components/filters/Filters';
import PageTitle from './components/pageTitle/PageTitle';
import UserList from './components/userList/UserList';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <PageTitle title='Listado de usuarios' />
      <Filters />
      <UserList />
    </>
  );
};

export default App;
