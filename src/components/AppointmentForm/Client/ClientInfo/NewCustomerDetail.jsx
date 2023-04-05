import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const NewCustomerDetail = (props) => {
  const { _setClientFormData, setIsNextdisabled } = props;

  useEffect(() => {
    setIsNextdisabled(false);
  }, []);
  return (
    <div style={{height: '528px'}}>
      <Typography variant="h6" gutterBottom>
        New customer
        <hr style={{width: '29px',
    padding: '1px',
    border: 'none',
    background: '#007BFF',
    marginLeft: '0px'}}></hr>
      </Typography>

      <div className="text-area"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: "512px",
          margin: "auto",
        }}
      >
        <Typography
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "32px",
            color: "#4D4F59",
          }}
          variant="Body"
          gutterBottom
        >
          Please enter your account phone number
        </Typography>

        <TextField
          id="input-with-icon-textfield"
          label="First name and last name"
          placeholder="First name and last name"
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
          placeholder="Phone number"
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
          placeholder="Email address"
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
};

export default NewCustomerDetail;
