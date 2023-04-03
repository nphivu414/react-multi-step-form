import React, {useState} from 'react';
import { Typography } from '@material-ui/core';
//import { InputField, CheckboxField, SelectField } from '../../FormFields';
//import Card from '@material-ui/core/Card';
//import Card from '@mui/material/Card';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
//import Typography from '@mui/material/Typography';
//import FormLabel from '@mui/joy/FormLabel';
// import Radio, { radioClasses } from '@mui/joy/Radio';
 //import RadioGroup from '@mui/joy/RadioGroup';
// import Sheet from '@mui/joy/Sheet';
//import List from '@mui/joy/List';
//import ListItem from '@mui/joy/ListItem';
//import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
// import Person from '@mui/icons-material/Person';
// import People from '@mui/icons-material/People';
// import Apartment from '@mui/icons-material/Apartment';
//import Image from 'mui-image';
//import ResponsiveDatePickers from './ReviewOrder/ResponsiveDatePickers';
//import PaymentForm from './Forms/PaymentForm';
import StepProgramoneChild from '../ReviewOrder/StepProgramoneChild';

 //const [rSelected, setRSelected] = useState();

// const handleclick = () => { 
   
//   console.log(<StepProgramoneChild/>)
//   // return ;
//   // return (<StepProgramoneChild/>);
// };

const AddressForm = () => {
   
  const[show , setShow ] =useState(false);

  return (
    
    <React.Fragment>
      {show && <StepProgramoneChild/>}
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
              onClick ={() => setShow(!show)}
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
 export default AddressForm;