import React from "react";
// import Autocomplete from "@material-ui/lab/Autocomplete";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import IconButton from "@material-ui/core/IconButton";

import { SearchIcon } from "../Icons";
import appointmentFormStyle from "../AppointmentForm/styles";

const AutocompleteWithSearchIcon = () => {
  const classes = appointmentFormStyle();
  const CountriesList=[
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District Of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
  return (
    <Autocomplete 
      sx={{minWidth:'155px'}}
      className={classes.textFieldDiv}     
      freeSolo
      options={CountriesList} // replace with your own options
      renderInput={(params) => (
        <TextField        
          {...params}
          variant="outlined"
          label="State"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <IconButton edge="end" aria-label="search">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      )}
    />
  );
};

export default AutocompleteWithSearchIcon;