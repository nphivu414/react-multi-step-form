import React from "react";
import { Typography } from "@material-ui/core";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const ExistingCustomerAddress = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Address where our team is needed
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
    </div>
  );
};

export default ExistingCustomerAddress;
