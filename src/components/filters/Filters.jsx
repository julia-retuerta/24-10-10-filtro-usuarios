import { StyledFilters } from './filters.styles';

const Filters = () => {
  return (
    <StyledFilters>
      <input type='text' placeholder='Buscar usuarios...' />
      <div>
        <label htmlFor=''>Solo activos</label>
        <input type='checkbox' name='' id='' />
      </div>
      <select name='' id=''>
        <option value=''>Por defecto</option>
        <option value=''>Por nombre</option>
      </select>
    </StyledFilters>
  );
};

export default Filters;
