import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
/// import { InputField, DatePickerField } from '../../FormFields';
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
export default function SystemAgeStep(props) {
  const { _setDescriptionFormData, setIsNextdisabled } = props;
  const [unitLocated, setUnitLocated] = useState("");
  const [systemAge, setSystemAge] = useState("");
  useEffect(() => {
    if (systemAge !== "" && unitLocated !== "") {
      setIsNextdisabled(false);
    }
  }, [unitLocated, systemAge]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        What is the approximate age of your system?
      </Typography>

      <RadioGroup
        aria-labelledby="storage-label"
        defaultValue="none"
        size="lg"
        sx={{ gap: 1.5 }}
      >
        {[
          "Less than 5 years",
          "6 to 9 years old",
          "10 to 15 years old",
          "Not sure",
        ].map((value) => (
          <Sheet
            key={value}
            sx={{
              p: 2,
              borderRadius: "md",
              boxShadow: "sm",
              bgcolor: "background.body",
            }}
          >
            <Radio
              label={`${value}`}
              name="systemAge"
              overlay
              disableIcon
              value={value}
              onChange={(event) => {
                _setDescriptionFormData(event.target.name, event.target.value);
                setSystemAge(event.target.value);
              }}
              slotProps={{
                label: ({ checked }) => ({
                  sx: {
                    fontWeight: "lg",
                    fontSize: "md",
                    color: checked ? "text.primary" : "text.secondary",
                  },
                }),
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      "--variant-borderWidth": "2px",
                      "&&": {
                        // && to increase the specificity to win the base :hover styles
                        borderColor: theme.vars.palette.primary[500],
                      },
                    }),
                  }),
                }),
              }}
            />
          </Sheet>
        ))}
      </RadioGroup>
      <Typography variant="h6" gutterBottom>
        Where is the leaking unit located?
      </Typography>
      <RadioGroup
        aria-labelledby="storage-label"
        defaultValue="none"
        size="lg"
        sx={{ gap: 1.5 }}
      >
        {[
          "Attic",
          "Upstairs",
          "Main floor",
          "Basement",
          "Garage",
          "Outside",
          "Other",
        ].map((value) => (
          <Sheet
            key={value}
            sx={{
              p: 2,
              borderRadius: "md",
              boxShadow: "sm",
              bgcolor: "background.body",
            }}
          >
            <Radio
              label={`${value}`}
              overlay
              disableIcon
              value={value}
              name="unitLocated"
              onChange={(event) => {
                _setDescriptionFormData(event.target.name, event.target.value);
                setUnitLocated(event.target.value);
              }}
              slotProps={{
                label: ({ checked }) => ({
                  sx: {
                    fontWeight: "lg",
                    fontSize: "md",
                    color: checked ? "text.primary" : "text.secondary",
                  },
                }),
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      "--variant-borderWidth": "2px",
                      "&&": {
                        // && to increase the specificity to win the base :hover styles
                        borderColor: theme.vars.palette.primary[500],
                      },
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
}
