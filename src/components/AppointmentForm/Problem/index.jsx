import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import ServiceStep from "./ServiceStep";
import ServiceTypeStep from "./ServiceTypeStep";
import IssuesStep from "./IssuesStep";
import useStyles from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import WestIcon from '@mui/icons-material/West';

export default function Problem(props) {
  const {
    _handleNext,
    problemActiveStep,
    setProblemActiveStep,
    setProblemFormField,
    problemFormField,
    setActiveStepColor,
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
            setActiveStepColor={setActiveStepColor}
          />
        );
      case 1:
        return (
          <ServiceTypeStep
            _setProblemFormData={_setProblemFormData}
            _handleNextStep={_handleNext}
            setActiveStepColor={setActiveStepColor}
          />
        );
      case 2:
        return (
          <IssuesStep
            _setProblemFormData={_setProblemFormData}
            _handleNext={_handleNext}
            setActiveStepColor={setActiveStepColor}
          />
        );
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <React.Fragment>
      {_renderStepContent(problemActiveStep)}

      {problemActiveStep !== 0 && (
        <>
          {problemActiveStep === 1 ? (
            <div style={{ textAlign: "center" }}>
              {" "}
              <Button
                startIcon={<FontAwesomeIcon icon={faArrowLeftLong} />}
                style={{
                  padding: "8px 12px",
                  height: "32px",
                  borderRadius: "500px",
                  border: "1px solid #007BFF",
                  color: "#007BFF",
                  backgroundColor: "#E2F0FF",
                }}
                variant="contained"
                color="primary"
                onClick={_handleBack}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    padding: "4px 2px",
                  }}
                >
                  Back
                </span>
              </Button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
                position: "fixed",
                height: "48px",
                bottom: 0,
                width: "100%",
                background: "#F2F5FB",
              }}
            >
              <Button
                startIcon={<FontAwesomeIcon icon={faArrowLeftLong} />}
                style={{
                  borderRadius: "500px",
                  padding: "2px 16px",
                  // position: "absolute",
                  background: "#FFFFFF",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.09)",
                  backgroundColor: "#fff",
                  left: "1rem",
                }}
                variant="contained"
                color="primary"
                onClick={_handleBack}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    padding: "4px 2px",
                  }}
                >
                  Back
                </span>
              </Button>
            </div>
          )}
        </>
      )}
    </React.Fragment>
  );
}
