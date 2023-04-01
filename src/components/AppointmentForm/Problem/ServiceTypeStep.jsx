import React from "react";
import { Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import ConstructionIcon from "@mui/icons-material/Construction";
import EventIcon from "@mui/icons-material/Event";
import RepeatIcon from "@mui/icons-material/Repeat";

const ServiceTypeStep = (props) => {
  const { _setProblemFormData, _handleNextStep } = props;

  const serviceTypeList = [
    {
      id: 1,
      label: "Repair and service",
      icon: <ConstructionIcon />,
    },
    {
      id: 2,
      label: "New equipment estimate",
      icon: <RepeatIcon />,
    },
    {
      id: 3,
      label: "Preventive maintenance",
      icon: <EventIcon />,
    },
  ];

  return (
    <div style={{ backgroundColor: "#F2F0FA", height: "593px" }}>
      <Typography variant="h6" gutterBottom style={{ textAlign: "center" }}>
        What type of service do you need?
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          backgroundColor: "#F2F0FA",
          justifyContent: "center",
        }}
      >
        {React.Children.toArray(
          serviceTypeList.map((item) => (
            <Button
              name="serviceType"
              key={item?.id}
              value={item?.label}
              onClick={(event) => {
                _setProblemFormData(event.target.name, event.target.value);
                _handleNextStep();
              }}
              variant="outlined"
              startIcon={item?.icon}
              style={{
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              {item?.label}
            </Button>
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceTypeStep;
