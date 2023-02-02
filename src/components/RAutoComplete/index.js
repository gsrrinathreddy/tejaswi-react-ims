import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function RAutocomplete() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={topSearch}
      sx={{ width: 200 ,}}
      
      renderInput={(params) => <TextField {...params}  label="Search for Gifts" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const topSearch = [
  { label: 'Cakes',  },
  { label: 'Flowers', },
  { label: 'Gifts', },
  { label: 'Combos',  },
  { label: 'Chocolate',  },
  { label: "Aniversary gift",},
  { label: 'Personalized gift' },
  {label: 'Birthday Gift'},
  
];