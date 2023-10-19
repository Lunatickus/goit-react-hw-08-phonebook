import { useDispatch, useSelector } from 'react-redux';
import { StyledFilterLabel } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <StyledFilterLabel>
      Find contacts by name
      <input
        type="text"
        name="filter"
        title="Find contacts by name"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
      />
    </StyledFilterLabel>
  );
};
