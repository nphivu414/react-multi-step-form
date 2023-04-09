import React, { useState } from "react";
import Calendar from "react-calendar";
import { Typography } from "@material-ui/core";
import "react-calendar/dist/Calendar.css";
//import Calendar from '../Appointment/Calendar';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import appointmentFormStyle from "../styles";
function Appointment() {
  const classes = appointmentFormStyle();
  const [value, onChange] = useState(new Date());

  return (
    <div className={classes.formDivWithHeight}>
      {/* <Calendar/> */}
      <Calendar onChange={onChange} value={value} />
      <div
        className="radio-text"
        style={{
          background: "#F2F0FA",
          height: "215px",
        }}
      >
        <RadioGroup
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "16px",
            paddingLeft: "20px",
          }}
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
        >
          <FormControlLabel
            value="morning"
            control={<Radio />}
            label="11:30 AM - 2:30 PM EST"
          />
          <FormControlLabel
            value="evening"
            control={<Radio />}
            label="4:00 PM - 5:30 PM EST"
          />
        </RadioGroup>
        <Typography
          variant="p"
          style={{
            paddingLeft: "34px",
            paddingTop: "25px",
            width: "97%",
            display: "flex",
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "24px",
            color: "#6C6F7C",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          interdum, diam vel fermentum posuere, enim massa.
        </Typography>
      </div>
    </div>
  );
}
export default Appointment;
