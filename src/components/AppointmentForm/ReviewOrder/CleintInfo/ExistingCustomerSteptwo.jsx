import React from 'react';
import { Typography  } from '@material-ui/core';
//import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
//import InputAdornment from '@mui/material/InputAdornment';
//import FormControl from '@mui/material/FormControl';
//import TextField from '@mui/material/TextField';
//import AccountCircle from '@mui/icons-material/AccountCircle';
//import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
//import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

  const  ExistingCustomerSteptwo = () =>{
  return (
    <div>
      <Typography variant="h6" gutterBottom>
      Address where our team is needed
      </Typography>
        
      <RadioGroup style={{ display: 'flex', flexDirection: 'column',paddingLeft: '17px'}} name="use-radio-group" defaultValue="first">
      <FormControlLabel value="first" label="XXXX Monterey Blvd. " control={<Radio />} />
      <FormControlLabel value="second" label="XXXX Harry Byrd Hwy." control={<Radio />} />
    </RadioGroup>
    
    
       </div>
      );
}

export default ExistingCustomerSteptwo;