import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const IssuesStep = (props) => {
  const { _setProblemFormData, _handleNext } = props;

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
    <div>
      <Typography variant="h6" gutterBottom>
        Heating & Air
      </Typography>
      <div
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
