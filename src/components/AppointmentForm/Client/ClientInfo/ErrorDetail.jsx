import React from "react";
import { Typography } from "@material-ui/core";
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import  {Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil,faCheck }  from '@fortawesome/free-solid-svg-icons';


function ErrorDetail()  {

return (
<div 
        style={{
        position: 'absolute',
        top: '10rem',
        left: '3rem',
        zIndex: '1'}}>

       <div 
        style={{
        width: '456px',
        height: '268px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 14px 34px rgba(0, 0, 0, 0.25)',
        borderRadius: '16px'
       }}>

        <Typography style={{fontSize: '20px',fontFamily: 'Poppins',fontWeight: '600',padding: '16px 16px 0px 16px'}} variant="h3">
        Address not found
        </Typography>
        
        <List style={{paddingBottom: '0px'}}>
        <ListItem style={{color: '#F84771',gap: '10px',paddingTop: '5px'}}>
            <WarningAmberRoundedIcon style={{marginBottom: '32px'}}  />
        <ListItemText
         >
        <span  style={{fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '400', fontSize: '16px',lineHeight: '32px'}}> We couldn’t locate your address, please double check to avoid any errors.</span></ListItemText>
         
      </ListItem>
      <ListItem style={{gap: '10px',paddingTop: '0px'}}>
            <LocationOnOutlinedIcon style={{color:'#007BFF',marginBottom: '32px'}} />
        <ListItemText>
        <span  style={{fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '400', color: '#1F2327', fontSize: '16px',lineHeight: '32px'}}> 
        65 Westington St. Suit 5C, Brooklyn,
          New York, NY 11249" 
        </span> 
        </ListItemText>
      </ListItem>
      </List>

       <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Button style={{background: '#E2F0FF',
    color: '#007BFF',
    marginLeft: '16px',
    padding: '8px 12px',
    border: '1px solid #007BFF',
    borderRadius:' 500px'}}
    startIcon={<FontAwesomeIcon icon={faPencil} />}
    >Edit address</Button>
      <Button style={{
            background: '#007BFF',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
            borderRadius: '500px',
            marginRight: '16px',
            padding: '8px 12px'
      }}
      startIcon={<FontAwesomeIcon icon={faCheck} />}
      >
        Address is correct</Button>
      </div>

       </div>
      </div>

);
    }
    export default ErrorDetail;