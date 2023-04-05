import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import ServiceStep from "./ServiceStep";
import ServiceTypeStep from "./ServiceTypeStep";
import IssuesStep from "./IssuesStep";
import useStyles from "../styles";

export default function Problem(props) {
  const {
    _handleNext,
    problemActiveStep,
    setProblemActiveStep,
    setProblemFormField,
    problemFormField,
  } = props;
  const classes = useStyles();

  // const currentValidationSchema = validationSchema[activeStep];

  function _handleBack() {
    setProblemActiveStep(problemActiveStep - 1);
  }

  function _setProblemFormData(keyName, value) {
    setProblemFormField({ ...problemFormField, [keyName]: value });
  }

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <ServiceStep
            _setProblemFormData={_setProblemFormData}
            _handleNextStep={_handleNext}
          />
        );
      case 1:
        return (
          <ServiceTypeStep
            _setProblemFormData={_setProblemFormData}
            _handleNextStep={_handleNext}
          />
        );
      case 2:
        return (
          <IssuesStep
            _setProblemFormData={_setProblemFormData}
            _handleNext={_handleNext}
          />
        );
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <React.Fragment>
      {_renderStepContent(problemActiveStep)}
      <div>
        {problemActiveStep !== 0 && (
          <>
            {problemActiveStep === 1 ? (
              <Button variant="contained" color="primary" onClick={_handleBack}>
                upper Back
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={_handleBack}>
                bottom Back
              </Button>
            )}
          </>
        )}
      </div>
    </React.Fragment>
  );
}
