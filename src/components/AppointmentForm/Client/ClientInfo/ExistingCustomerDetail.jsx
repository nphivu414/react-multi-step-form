import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { PhoneIcon } from "../../../Icons";
import { SvgIcon } from "@mui/material";
import appointmentFormStyle from "../../styles";

const ExistingCustomerDetail = (props) => {
  const classes = appointmentFormStyle();
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
    <div className={classes.formDivWithHeight}>
      <Typography variant="h6" className={classes.formTitleTypoGraphy}>
        Existing customer
        <hr className={classes.formTitleHr}></hr>
      </Typography>

      <div className={classes.formTitleDiv}>
        <Typography className={classes.formInstructionTypo} variant="Body">
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
          className={classes.textFieldDiv}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon component={PhoneIcon} />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default ExistingCustomerDetail;
