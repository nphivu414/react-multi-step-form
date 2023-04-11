import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from '@mui/joy/Card';
import Snackbar from "@mui/material/Snackbar";
import zIndex from "@mui/material/styles/zIndex";

const CookiesPopup = (props) => {
  const { setIsShowCookies, isShowCookies } = props;
  const handleClose = () => {
    setIsShowCookies(false);
  };

  return (
    <div className="overlay " style={{zIndex:'99'}}>
    <div className="popupcard" style={{width: '400px',height:'240px',backgroundColor:'#F2F5FB',right: '70px',bottom:'220px',display:'flex',flexDirection:'column',borderRadius:'20px',boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 34px'}}
      // anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={isShowCookies}
      onClose={handleClose}>

            <h5 clasname="popupheading" style={{color: 'black',fontFamily:'poppins',fontWeight:'600',fontSize: '20px',padding:'25px 16px 8px 16px',margin: '0px'}}>Cookie Consent</h5>
      <span className="popuptext" style={{color: 'black',fontFamily:'poppins',fontWeight:'400',fontSize: '15px',lineHeight: '24px',padding: '8px 16px 8px 16px'}}> This website uses cookies to improve your experience. By using this site, you agree to our use of cookies.</span>
     
      <Button style={{background: '#007bff',color:'white',fontFamily:'Poppins',width: '80px', marginLeft: 'auto',marginRight: '30px',marginTop:'15px'}}  onClick={handleClose}>
       Accept
      </Button>
       
        </div>
        </div>
  );
};

export default CookiesPopup;
