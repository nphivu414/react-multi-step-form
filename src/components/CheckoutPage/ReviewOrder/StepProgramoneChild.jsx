import React from 'react';
import { Typography  } from '@material-ui/core';
import Button from '@mui/material/Button';
import ConstructionIcon from '@mui/icons-material/Construction';
import EventIcon from '@mui/icons-material/Event';
import RepeatIcon from '@mui/icons-material/Repeat';
/// import { InputField, DatePickerField } from '../../FormFields';
// import Radio from '@mui/joy/Radio';
// import RadioGroup from '@mui/joy/RadioGroup';
// import Sheet from '@mui/joy/Sheet';


  const  StepProgramoneChild = () =>{
  return (
    <div style={{backgroundColor: '#F2F0FA',height: '593px'}}>
      <Typography variant="h6" gutterBottom style={{textAlign: 'center'}}>
      What type of service do you need?
      </Typography>
       
      <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '22px',
    backgroundColor: '#F2F0FA',
    justifyContent: 'center'}}>
      <Button style={{ width: '266px',
    marginRight: 'auto',
    marginLeft: 'auto'}}variant="outlined" startIcon={<ConstructionIcon />}>
        <span 
        className='Okay'
       >Repair and service</span>
      </Button>
      
      <Button style={{ width: '331px',
    marginRight: 'auto',
    marginLeft: 'auto'}}variant="outlined" startIcon={<RepeatIcon />}>
        <span 
        className='Okay'
       >New equipment estimate</span>
      </Button>
      <Button style={{ width: '325px',
    marginRight: 'auto',
    marginLeft: 'auto'}}variant="outlined" startIcon={<EventIcon />}>
        <span 
        className='Okay'
       >Preventive maintenance</span>
      </Button>
      </div>

      </div>
      );
}

export default StepProgramoneChild;