import React from 'react';
import { Typography  } from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';


  const  StepDescriptiononeChild = () =>{
  return (
    <div>
      <Typography variant="h6" gutterBottom>
      This visit requires a diagnostic fee of $99
      </Typography>

      <div style={{ width: '512px',
        margin: 'auto'}}>
      <Typography  variant="p" style={{
        color: '#4D4F59',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '32px'}}>
         Pellentesque bibendum sapien at dui accumsan, condimentum cursus turpis porta. Suspendisse euismod risus nibh, sit amet tristique elit posuere in. Sed ut lacinia nisl. Sed non leo auctor est porta fermentum sed eu erat.
      </Typography>
       </div>
     <div style={{padding: '10px'}}>
      <Checkbox   size="small" />
      <span style={{
       fontFamily: 'Poppins',
       fontStyle: 'normal',
       fontWeight: '400',
       fontSize: '16px',
       lineHeight: '32px',
       color: '#1F2327'}}
      >I understand there is a $99 diagnostic cost</span> 
     </div> 
     </div>
      );
}

export default StepDescriptiononeChild;