import React, { useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  Box,
  RadioGroup,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Heating, Plumbing, Electrical } from "../../Icons";
import { SvgIcon } from "@mui/material";
import appointmentFormStyle from "../styles";

const ServiceStep = (props) => {
  // const classes = useStyles(); // Apply the custom styles
  const classes = appointmentFormStyle();
  const services = [
    { id: "Plumbing", label: "Plumbing", icon: Plumbing },
    { id: "Heating", label: "Heating & Air", icon: Heating },
    { id: "Electrical", label: "Electrical", icon: Electrical },
  ];
  const { _setProblemFormData, _handleNextStep, setActiveStepColor } = props;
  const [selectedOption, setSelectedOption] = React.useState({});

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    _setProblemFormData(event.target.name, event.target.value);
    _handleNextStep();
  };

  useEffect(() => {
    setActiveStepColor("#FFFFFF");
  }, []);

  return (
    <Box>
      <Typography
        /* style={{
          padding: "24px",
          paddingBottom: "16px",
        }} */
        className={classes.formDiv}
        variant="h6"
      >
        What do you need help with?
        <hr
          style={{
            width: "29px",
            padding: "1px",
            border: "none",
            background: "#007BFF",
            borderColor: "#1F2327",
            marginLeft: "0px",
          }}
        ></hr>
      </Typography>

      <FormControl
        style={{
          display: "grid",
        }}
        component="fieldset"
      >
        <RadioGroup
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "auto auto",
            gap: "24px",
            padding: "24px",
            paddingTop: "16px",
          }}
          value={selectedOption?.label}
          onChange={handleOptionChange}
        >
          {services.map((service) => (
            <FormControlLabel
              key={service?.id}
              value={service?.label}
              control={<Radio style={{ display: "none" }} />}
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px",
                gap: "16px",
                width: "235px",
                height: "116px",
                left: 0,
                right: 0,
                background: "#FFFFFF",
                borderRadius: "16px",
                cursor: "pointer",
                border: "1px solid #D3D7E1",
              }}
              label={
                <Box>
                  <Box
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <SvgIcon component={service?.icon} />
                  </Box>
                  <Typography
                    style={{
                      textAlign: "center",
                      lineHeight: "20px",
                    }}
                  >
                    {service?.label}
                  </Typography>
                </Box>
              }
              classes={{ root: classes.myFormControlLabelRoot }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default ServiceStep;
