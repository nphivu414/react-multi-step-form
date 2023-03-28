import React from 'react';
import { Typography  } from '@material-ui/core';
import Button from '@mui/material/Button';
//import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
/// import { InputField, DatePickerField } from '../../FormFields';
// import Radio from '@mui/joy/Radio';
// import RadioGroup from '@mui/joy/RadioGroup';
// import Sheet from '@mui/joy/Sheet';


  const  StepProgramtwoChild = () =>{
  return (

    <div>
      <Typography variant="h6" gutterBottom>
    Heating & Air
      </Typography>
      <div style={{display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '512px',
    margin: 'auto'
}}>
      <Button style={{background: '#F8FBFD',
      color: 'black',
      border: '1px solid #D3D7E1',
      borderRadius: '8px',
      justifyContent: 'space-between',
      fontFamily: 'poppins',
      fontSize: '16px',
      fontWeight: '400',
      textTransform: 'none'
       }} endIcon={<KeyboardArrowRightIcon />}>
        No heat
      </Button>
      <Button style={{background: '#F8FBFD',
      border: '1px solid #D3D7E1',
      color: 'black',
      borderRadius: '8px',
      justifyContent: 'space-between',
      fontFamily: 'poppins',
      fontSize: '16px',
      fontWeight: '400',
      textTransform: 'none'
       }} endIcon={<KeyboardArrowRightIcon />}>
        No cooling
      </Button>
      <Button style={{background: '#F8FBFD',
      border: '1px solid #D3D7E1',
      borderRadius: '8px',
      color: 'black',
      justifyContent: 'space-between',
      fontFamily: 'poppins',
      fontSize: '16px',
      fontWeight: '400',
      textTransform: 'none'
       }} endIcon={<KeyboardArrowRightIcon />}>
        Water leak from HVAC unit
      </Button>
      <Button style={{background: '#F8FBFD',
      border: '1px solid #D3D7E1',
      color: 'black',
      borderRadius: '8px',
      justifyContent: 'space-between',
      fontFamily: 'poppins',
      fontSize: '16px',
      fontWeight: '400',
      textTransform: 'none'
       }} endIcon={<KeyboardArrowRightIcon />}>
        Noise
      </Button>
      <Button style={{background: '#F8FBFD',
      border: '1px solid #D3D7E1',
      color: 'black',
      borderRadius: '8px',
      justifyContent: 'space-between',
      fontFamily: 'poppins',
      fontSize: '16px',
      fontWeight: '400',
      textTransform: 'none'
       }} endIcon={<KeyboardArrowRightIcon />}>
        Thermostat
      </Button>
      <Button style={{background: '#F8FBFD',
      color: 'black',
      border: '1px solid #D3D7E1',
      borderRadius: '8px',
      justifyContent: 'space-between',
      fontFamily: 'poppins',
      fontSize: '16px',
      fontWeight: '400',
      textTransform: 'none'
       }} endIcon={<KeyboardArrowRightIcon />}>
        Gas leak
      </Button>
      <Button style={{background: '#F8FBFD',
      color: 'black',
      border: '1px solid #D3D7E1',
      borderRadius: '8px',
      justifyContent: 'space-between',
      fontFamily: 'poppins',
      fontSize: '16px',
      fontWeight: '400',
      textTransform: 'none'
       }} endIcon={<KeyboardArrowRightIcon />}>
        Air quality
      </Button>
      
      </div>
      </div>
      );
}

export default StepProgramtwoChild;