import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import ConstructionIcon from "@mui/icons-material/Construction";
import EventIcon from "@mui/icons-material/Event";
import RepeatIcon from "@mui/icons-material/Repeat";
import appointmentFormStyle from "../styles";
const ServiceTypeStep = (props) => {
  const classes = appointmentFormStyle();
  const { _setProblemFormData, _handleNextStep, setActiveStepColor } = props;

  const serviceTypeList = [
    {
      id: 1,
      label: (
        <span style={{ fontWeight: "600", fontSize: "18px" }}>
          Repair and service
        </span>
      ),
      icon: <ConstructionIcon />,
    },
    {
      id: 2,
      label: (
        <span style={{ fontWeight: "600", fontSize: "18px" }}>
          New equipment estimate
        </span>
      ),
      icon: <RepeatIcon />,
    },
    {
      id: 3,
      label: (
        <span style={{ fontWeight: "600", fontSize: "18px" }}>
          Preventive maintenance
        </span>
      ),
      icon: <EventIcon />,
    },
  ];

  useEffect(() => {
    setActiveStepColor("#F2F0FA");
  }, []);

  return (
    // <div style={{ backgroundColor: "#F2F0FA" }}>
    <div
      className={classes.formDiv}
      //  style={{ paddingBottom: "24px", backgroundColor: "#F2F0FA" }}
    >
      <Typography variant="h6" gutterBottom style={{ textAlign: "center" }}>
        What type of service do you need?
        <hr
          style={{
            width: "29px",
            padding: "1px",
            border: "none",
            background: "#007BFF",
            marginLeft: "14.5rem",
          }}
        ></hr>
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        {React.Children.toArray(
          serviceTypeList.map((item) => (
            <Button
              className="Servicetype"
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
                color: "black",
                fontFamily: "poppins",
                fontWeight: "600",
                letterSpacing: " 0.05em",
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
