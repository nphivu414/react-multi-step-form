import React from 'react';
import { Typography  } from '@material-ui/core';
//import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
//import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// //import AccountCircle from '@mui/icons-material/AccountCircle';
// import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

  const  NewCustomerSteptwo = () =>{

    const [state, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <div>
      <Typography variant="h6" gutterBottom>
      Address where our team is needed
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
   Please enter your details below
      </Typography>
      
      <TextField id="outlined-basic" label="Street Address" variant="outlined" />
      <TextField id="outlined-basic" label="Apartment / Unit" variant="outlined" />

      <div style={{display: 'grid', gridTemplateColumns: 'auto auto',justifyContent: 'space-between',gap: '27px'}}>
      <TextField style={{width: '330px'}} id="outlined-basic" label="City" variant="outlined" />
      <FormControl style={{width: '155px'}} >
        <InputLabel id="demo-simple-select-label">state</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="state"
          onChange={handleChange}
        >
      <MenuItem value=""> <em>None</em> </MenuItem>
      <MenuItem  value={0}>Alabama</MenuItem >
      <MenuItem  value={1}>Alaska</MenuItem >
      <MenuItem  value={2}>Arizona</MenuItem >
      <MenuItem  value={3}>Arkansas</MenuItem >
      <MenuItem  value={4}>California</MenuItem >
      <MenuItem  value={5}>Colorado</MenuItem >
      <MenuItem  value={6}>Connecticut</MenuItem >
      <MenuItem  value={7}>Delaware</MenuItem >
      <MenuItem  value={8}>District Of Columbia</MenuItem >
      <MenuItem  value={9}>Florida</MenuItem >
      <MenuItem  value={10}>Georgia</MenuItem >
      <MenuItem  value={11}>Hawaii</MenuItem >
      <MenuItem  value={12}>Idaho</MenuItem >
      <MenuItem  value={13}>Illinois</MenuItem >
      <MenuItem  value={14}>Indiana</MenuItem >
      <MenuItem  value={15}>Iowa</MenuItem >
      <MenuItem  value={16}>Kansas</MenuItem >
      <MenuItem  value={17}>Kentucky</MenuItem >
      <MenuItem  value={18}>Louisiana</MenuItem >
      <MenuItem  value={19}>Maine</MenuItem >
      <MenuItem  value={20}>Maryland</MenuItem >
      <MenuItem  value={21}>Massachusetts</MenuItem >
      <MenuItem  value={22}>Michigan</MenuItem >
      <MenuItem  value={23}>Minnesota</MenuItem >
      <MenuItem  value={24}>Mississippi</MenuItem >
      <MenuItem  value={25}>Missouri</MenuItem >
      <MenuItem  value={26}>Montana</MenuItem >
      <MenuItem  value={27}>Nebraska</MenuItem >
      <MenuItem  value={28}>Nevada</MenuItem >
      <MenuItem  value={29}>New Hampshire</MenuItem >
      <MenuItem  value={30}>New Jersey</MenuItem >
      <MenuItem  value={31}>New Mexico</MenuItem >
      <MenuItem  value={32}>New York</MenuItem >
      <MenuItem  value={33}>North Carolina</MenuItem >
      <MenuItem  value={34}>North Dakota</MenuItem >
      <MenuItem  value={35}>Ohio</MenuItem >
      <MenuItem  value={36}>Oklahoma</MenuItem >
      <MenuItem  value={37}>Oregon</MenuItem >
      <MenuItem  value={38}>Pennsylvania</MenuItem >
      <MenuItem  value={39}>Rhode Island</MenuItem >
      <MenuItem  value={40}>South Carolina</MenuItem >
      <MenuItem  value={41}>South Dakota</MenuItem >
      <MenuItem  value={42}>Tennessee</MenuItem >
      <MenuItem  value={43}>Texas</MenuItem >
      <MenuItem  value={44}>Utah</MenuItem >
      <MenuItem  value={45}>Vermont</MenuItem >
      <MenuItem  value={46}>Virginia</MenuItem >
      <MenuItem  value={47}>Washington</MenuItem >
      <MenuItem  value={48}>West Virginia</MenuItem >
      <MenuItem  value={49}>Wisconsin</MenuItem >
      <MenuItem  value={50}>Wyoming</MenuItem >
        </Select>
      </FormControl>
      </div>

    <div style={{display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between'}}>

      <TextField style={{width: '155px'}} id="outlined-basic" label="Zip Code" variant="outlined" />

      <div style={{width: '333px'}}>
       <Checkbox   size="small" />
      <span style={{
       fontFamily: 'Poppins',
       fontStyle: 'normal',
       fontWeight: '400',
       fontSize: '16px',
       lineHeight: '32px',
       color: '#1F2327'}}
      > I own this residence</span> 
      </div>
      
      </div>
     
      </div>
       </div>
      );
}

export default NewCustomerSteptwo;