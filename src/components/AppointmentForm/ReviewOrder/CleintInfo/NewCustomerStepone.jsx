import React from 'react';
import { Typography  } from '@material-ui/core';
//import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
//import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

  const  NewCustomerStepone = () =>{
  return (
    <div>
      <Typography variant="h6" gutterBottom>
      New customer
      </Typography>
        
       <div style={{display: 'flex', flexDirection: 'column', gap: '30px', width: '512px', margin: 'auto'}}>
         <Typography style={{fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '32px',
      color: '#4D4F59'
     }}
     variant="Body" gutterBottom>
     Please enter your account phone number
      </Typography>
      
      <TextField
        id="input-with-icon-textfield"
        label="First name and last name"
        placeholder='First name and last name'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonOutlineOutlinedIcon />
            </InputAdornment>
          ),
        }} 
      />
       <TextField
        id="input-with-icon-textfield"
        label="Phone number"
        placeholder='Phone number'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocalPhoneOutlinedIcon />
            </InputAdornment>
          ),
        }} 
      />
       <TextField
        id="input-with-icon-textfield"
        label="Email address"
        placeholder='Email address'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
          ),
        }} 
      />    
      </div>
       </div>
      );
}

export default NewCustomerStepone;