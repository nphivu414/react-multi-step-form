import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

import { SearchIcon } from "../../../Icons";
const CountriesList = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District Of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
const AutocompleteWithSearchIcon = () => {
  return (
    <Autocomplete
      freeSolo
      options={CountriesList} // replace with your own options
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Search"
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
