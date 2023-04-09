import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import appointmentFormStyle from "../../styles";

import { EmailIcon, ProfileIcon, PhoneIcon } from "../../../Icons";
import { SvgIcon } from "@mui/material";

const NewCustomerDetail = (props) => {
  const classes = appointmentFormStyle();
  const { _setClientFormData, setIsNextdisabled } = props;

  useEffect(() => {
    setIsNextdisabled(false);
  }, []);
  return (
    <div className={classes.formDivWithHeight}>
      <Typography className={classes.formTitleTypoGraphy} variant="h6">
        New customer
        <hr className={classes.formTitleHr}></hr>
      </Typography>
      <div className={classes.formTitleDiv}>
        <Typography className={classes.formInstructionTypo} variant="Body">
          Please enter your details below
        </Typography>

        <TextField
          variant="outlined"
          id="name"
          label="First name and last name"
          placeholder="First name and last name"
          className={classes.textFieldDiv}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon component={ProfileIcon} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="phoneNumber"
          label="Phone number"
          placeholder="Phone number"
          className={classes.textFieldDiv}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon component={PhoneIcon} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="emailAddress"
          label="Email address"
          placeholder="Email address"
          className={classes.textFieldDiv}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon component={EmailIcon} />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default NewCustomerDetail;
