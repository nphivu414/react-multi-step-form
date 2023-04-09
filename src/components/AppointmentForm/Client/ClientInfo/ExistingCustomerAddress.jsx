import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import appointmentFormStyle from "../../styles";
const ExistingCustomerAddress = () => {
  const classes = appointmentFormStyle();
  return (
    <div className={classes.formDivWithHeight}>
      <Typography variant="h6" className={classes.formTitleTypoGraphy}>
        Address where our team is needed
        <hr className={classes.formTitleHr}></hr>
      </Typography>
      <div
        style={{
          gap: "16px",
        }}
        className={classes.formTitleDiv}
      >
        <RadioGroup
          style={{
            gap: "16px",
          }}
          name="use-radio-group"
          defaultValue="first"
        >
          <FormControlLabel
            className={classes.formAddressRadio}
            value="first"
            label="XXXX Monterey Blvd. "
            control={<Radio />}
          />
          <FormControlLabel
            className={classes.formAddressRadio}
            value="second"
            label="XXXX Harry Byrd Hwy."
            control={<Radio />}
          />
        </RadioGroup>
        <Button
          style={{
            border: "1px solid #007BFF",
            color: "#007BFF",
            background: "#E2F0FF",
            borderRadius: "500px",
            padding: "6px 12px",
            height: "28px",
            width: "fit-content",
          }}
        >
          <span
            style={{
              fontStyle: "normal",
              fontSeight: "600",
              fontSize: "12px",
              letterSpacing: "0.1em",
            }}
          >
            ADD NEW ADDRESS
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ExistingCustomerAddress;
