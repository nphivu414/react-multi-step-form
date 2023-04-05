import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const ExistingCustomerAddress = () => {
  return (
    <div style={{height: '528px'}}>
      <Typography variant="h6" gutterBottom>
        Address where our team is needed
        <hr style={{width: '29px',
    padding: '1px',
    border: 'none',
    background: '#007BFF',
    marginLeft: '0px'}}></hr>
      </Typography>

      <RadioGroup
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "17px",
        }}
        name="use-radio-group"
        defaultValue="first"
      >
        <FormControlLabel
          value="first"
          label="XXXX Monterey Blvd. "
          control={<Radio />}
        />
        <FormControlLabel
          value="second"
          label="XXXX Harry Byrd Hwy."
          control={<Radio />}
        />
      </RadioGroup>

      <Button style={{border: '1px solid #007BFF',
    color: '#007BFF',
    background: '#E2F0FF',
    borderRadius: '500px',
    padding: '6px 12px',
    marginLeft: '30px',
    marginTop: '10px'}}>
      <span style={{fontStyle: 'normal',
      fontSeight: '600',
      fontSize: '12px',
      letterSpacing: '0.1em'
    }}>ADD NEW ADDRESS</span></Button>


    </div>
  );
};

export default ExistingCustomerAddress;
