import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FilterListIcon from '@mui/icons-material/FilterList';
import InputAdornment from '@mui/material/InputAdornment';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Box sx={{ width: 400, mx: 'auto' }}>
      <TextField
        fullWidth
        id="filter"
        name="filter"
        type="text"
        title="Find contacts by name"
        label="Find contacts by name"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FilterListIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
