import React, { useState, useEffect } from "react";
import { Typography, Box } from "@material-ui/core";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Heating } from "../../Icons";
import { SvgIcon } from "@mui/material";
import appointmentFormStyle from "../styles";

const IssuesStep = (props) => {
  const { _setProblemFormData, _handleNext, setActiveStepColor } = props;
  const classes = appointmentFormStyle();

  useEffect(() => {
    setActiveStepColor("#FFFFFF");
  }, []);

  const faultList = [
    {
      id: 1,
      label: "No heat",
    },
    {
      id: 2,
      label: "No cooling",
    },
    {
      id: 3,
      label: "Water leak from HVAC unit",
    },
    {
      id: 4,
      label: "Noise",
    },
    {
      id: 5,
      label: "Thermostat",
    },
    {
      id: 6,
      label: "Gas leak",
    },
    {
      id: 7,
      label: "Air quality",
    },
  ];

  return (
    <div className={classes.formDiv}>
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
        Heating & Air - Repair and service
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" gutterBottom>
          Heating & Air
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
        <Box
          style={{
            marginTop: "31px",
            marginRight: "24px",
            width: "50px",
          }}
        >
          <SvgIcon component={Heating} />
        </Box>
      </div>
      <div
        className="heatstep"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "512px",
          margin: "auto",
        }}
      >
        {React.Children.toArray(
          faultList.map((item) => (
            <Button
              name="serviceIssues"
              key={item?.id}
              value={item?.label}
              onClick={(event) => {
                _setProblemFormData(event.target.name, event.target.value);
                _handleNext();
              }}
              style={{
                background: "#F8FBFD",
                color: "black",
                border: "1px solid #D3D7E1",
                borderRadius: "8px",
                justifyContent: "space-between",
                fontFamily: "poppins",
                fontSize: "16px",
                fontWeight: "400",
                textTransform: "none",
              }}
              endIcon={<KeyboardArrowRightIcon />}
            >
              {item?.label}
            </Button>
          ))
        )}
      </div>
    </div>
  );
};

export default IssuesStep;
