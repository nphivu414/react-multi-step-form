import React from 'react';
import { Typography } from '@material-ui/core';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Link from '@mui/material/Link';
import StepProgramoneChild from './ReviewOrder/StepProgramoneChild';
// import StepProgramtwoChild from '../ReviewOrder/StepProgramtwoChild';

 //const [rSelected, setRSelected] = useState();

const handleclick = () => { 
   
   console.log(<StepProgramoneChild/>)
  // return ;
// { <StepProgramoneChild/>}
};

const ParentStepone = () => {
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      What do you need help with?
      </Typography>

      <RadioGroup aria-label="Your plan"
       name="people"
       defaultValue="none"
        style={{display: 'grid',
          gridTemplateColumns: 'auto auto',
          gap: '15px',
          width: '95%',
          marginLeft: 'auto',
          height: '244px'
      }}
      
        >
      
        {['Plumbing', 'Heating & Air', 'Electrical'].map((item, value) => (
          <Sheet
            
            key={item}
            sx={{ boxShadow: 'sm', bgcolor: 'background.body' }}
          >
            {/* <ListItemDecorator>
              {[<Person />, <People />, <Apartment />][index]}
            </ListItemDecorator> */}
            
            <Radio
              overlay
              disableIcon
              value={item}
              label={item}
              onClick={handleclick}
              sx={{ flexGrow: 1, flexDirection: 'row-reverse' }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      inset: -1,
                      border: '2px solid',
                      borderColor: theme.vars.palette.primary[500],
                    }),
                  }),
                }),
              }}
            />
          
          </Sheet>
        ))}
     
    </RadioGroup>

    </React.Fragment>
  );
}
 export default ParentStepone;