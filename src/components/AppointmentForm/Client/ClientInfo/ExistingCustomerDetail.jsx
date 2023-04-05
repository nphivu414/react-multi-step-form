import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const ExistingCustomerDetail = (props) => {
  const { _setClientFormData, setIsNextdisabled } = props;
  const [accountPhoneNumber, setAccountPhoneNumber] = useState("");

  useEffect(() => {
    if (accountPhoneNumber === "") {
      setIsNextdisabled(true);
    } else {
      setIsNextdisabled(false);
    }
  }, [accountPhoneNumber]);

  return (
    <div  style={{height: '528px'}} >
      <Typography variant="h6" gutterBottom>
        Existing customer
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
          name="accountPhoneNumber"
          id="input-with-icon-textfield"
          label="Account phone number"
          placeholder="Account phone number"
          onChange={(event) => {
            setAccountPhoneNumber(event.target.value);
            _setClientFormData(event.target.name, event.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default ExistingCustomerDetail;
