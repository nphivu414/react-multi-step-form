import React from "react";
import { Typography } from "@material-ui/core";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";

const ServiceStep = (props) => {
  const services = ["Plumbing", "Heating & Air", "Electrical"];
  const { _setProblemFormData, _handleNextStep } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        What do you need help with?
        <hr style={{width: '29px',
    padding: '1px',
    border: 'none',
    background: '#007BFF',
    borderColor: '#1F2327',
    marginLeft: '0px'}}></hr>
      </Typography>
      

      <RadioGroup
        aria-label="Your plan"
        name="people"
        defaultValue="none"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "15px",
          width: "95%",
          marginLeft: "auto",
          height: "244px",
        }}
      >
        {services.map((value) => (
          <Sheet
            key={value}
            sx={{ boxShadow: "sm", bgcolor: "background.body" }}
          >
            <Radio
              overlay
              disableIcon
              name="service"
              value={value}
              label={value}
              onClick={(event) => {
                _setProblemFormData(event.target.name, event.target.value);
                _handleNextStep();
              }}
              sx={{ flexGrow: 1, flexDirection: "row-reverse" }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      inset: -1,
                      border: "2px solid",
                      borderColor: theme.vars.palette.primary[500],
                    }),
                  }),
                }),
              }}
            />
          </Sheet>
        ))}
      </RadioGroup>
    </React.Fragment>
  );
};
export default ServiceStep;
