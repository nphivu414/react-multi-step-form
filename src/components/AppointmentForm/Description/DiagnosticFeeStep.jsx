import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import appointmentFormStyle from "../styles";
const DiagnosticFeeStep = (props) => {
  const classes = appointmentFormStyle();
  const { _setDescriptionFormData, setIsNextdisabled } = props;
  const [isChecked, setIschecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setIsNextdisabled(false);
    } else {
      setIsNextdisabled(true);
    }
    _setDescriptionFormData("DiagnosticFee", isChecked);
  }, [isChecked]);

  return (
    <div className={classes.formDivWithHeight}>
      <Typography
        variant="p"
        style={{
          top: "19px",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "400",
          paddingLeft: "25px",
          fontSize: "13px",
          color: " #007BFF",
          lineHeight: "16px",
          position: "relative",
        }}
      >
        Heating & Air - Water leak from HVAC unit - Repair and service
      </Typography>
      <Typography variant="h6" gutterBottom>
        This visit requires a diagnostic fee of $99
        <hr
          style={{
            width: "29px",
            padding: "1px",
            border: "none",
            background: "#007BFF",
            marginLeft: "0px",
          }}
        ></hr>
      </Typography>

      <div className="text-para" style={{ width: "512px", margin: "auto" }}>
        <Typography
          variant="inherit"
          style={{
            color: "#4D4F59",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "32px",
          }}
        >
          Pellentesque bibendum sapien at dui accumsan, condimentum cursus
          turpis porta. Suspendisse euismod risus nibh, sit amet tristique elit
          posuere in. Sed ut lacinia nisl. Sed non leo auctor est porta
          fermentum sed eu erat.
        </Typography>
      </div>
      <div style={{ padding: "10px 0px 0px 11px",display: 'flex', flexDirection: 'row'}}>
        <Checkbox
          name="DiagnosticFee"
          size="medium"
          onChange={() => setIschecked(!isChecked)}
        />
        <span
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "40px",
            color: "#1F2327",
          }}
        >
          I understand there is a $99 diagnostic cost
        </span>
      </div>
    </div>
  );
};

export default DiagnosticFeeStep;
