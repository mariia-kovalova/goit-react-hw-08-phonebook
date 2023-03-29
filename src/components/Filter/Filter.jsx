import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { nanoid } from 'nanoid';
import { Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';

const filterId = nanoid();

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch(setFilter(e.currentTarget.value.trim()));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormControl sx={{ width: '350px' }}>
        <InputLabel htmlFor={filterId}>Search</InputLabel>
        <OutlinedInput
          id={filterId}
          type="text"
          label="Search"
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
};
