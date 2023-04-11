import React, { useState, useEffect } from "react";
import "./style.css";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import { SvgIcon } from "@mui/material";
import { CrossIcon } from "../Icons";

import { Formik, Form } from "formik";
import ButtonAppBar from "./ButtonAppBar";
import Problem from "./Problem";
import Description from "./Description";
import Client from "./Client";
import Appointment from "./Appointment";
import Confirm from "./Confirm";
import Thanks from "./Thanks";
//import validationSchema from "./FormModel/validationSchema";
import AppointmentFormModel from "./FormModel/appointmentFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import { steps, problemSteps, descriptionSteps, clientSteps } from "./steps";
import useStyles from "./styles";

const { formId } = AppointmentFormModel;

export default function AppointmentForm(props) {
  const { setActiveStepColor } = props;
  const classes = useStyles();
  const {
    problemIntialValues,
    descriptionIntialValues,
    clientIntialValues,
  } = formInitialValues;

  const [isNextdisabled, setIsNextdisabled] = useState(true);
  const [nextHide, setNextHide] = useState(false);
  const [problemFormField, setProblemFormField] = useState(problemIntialValues);
  const [descriptionFormField, setDescriptionFormField] = useState(
    descriptionIntialValues
  );
  const [clientFormField, setClientFormField] = useState(clientIntialValues);
  // set default step for each
  const [activeStep, setActiveStep] = useState(2);
  const [problemActiveStep, setProblemActiveStep] = useState(0);
  const [descriptionActiveStep, setDescriptionActiveStep] = useState(0);
  const [clientActiveStep, setClientActiveStep] = useState(0);
  //const currentValidationSchema = validationSchema[activeStep];
  // check last step of each child
  const isLastStep = activeStep === steps.length - 1;
  const isProblemLastStep = problemActiveStep === problemSteps.length - 1;
  const isDescriptionLastStep =
    descriptionActiveStep === descriptionSteps.length - 1;
  const isClientLastStep = clientActiveStep === clientSteps.length - 1;

  function _handleNext() {
    switch (activeStep) {
      case 0:
        return _handleProblemNext();
      case 1:
        return _handleDescriptionNext();
      case 2:
        return _handleClientNext();
      case 3:
        return setActiveStep(activeStep + 1);
      case 4:
        return setActiveStep(activeStep + 1);
      default:
        return;
    }
  }

  const _handleProblemNext = () => {
    if (isProblemLastStep) {
      setActiveStep(activeStep + 1);
    } else {
      setProblemActiveStep(problemActiveStep + 1);
    }
  };

  const _handleDescriptionNext = () => {
    if (isDescriptionLastStep) {
      setActiveStep(activeStep + 1);
    } else {
      setDescriptionActiveStep(descriptionActiveStep + 1);
    }
  };

  const _handleClientNext = () => {
    if (isClientLastStep) {
      setActiveStep(activeStep + 1);
    } else {
      setClientActiveStep(clientActiveStep + 1);
    }
  };

  function _handleBack() {
    switch (activeStep) {
      case 0:
        return _handleProblemBack();
      case 1:
        return _handleDescriptionBack();
      case 2:
        return _handleClientBack();
      case 3:
        return setActiveStep(activeStep - 1);
      case 4:
        return setActiveStep(activeStep - 1);
      default:
        return;
    }
  }

  const _handleProblemBack = () => {
    if (problemActiveStep !== 0) {
      setProblemActiveStep(problemActiveStep - 1);
    }
  };

  const _handleDescriptionBack = () => {
    if (descriptionActiveStep === 0) {
      setActiveStep(activeStep - 1);
    } else {
      setDescriptionActiveStep(descriptionActiveStep - 1);
    }
  };

  const _handleClientBack = () => {
    if (clientActiveStep === 0) {
      setActiveStep(activeStep - 1);
    } else {
      setClientActiveStep(clientActiveStep - 1);
    }
  };

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Problem
            problemActiveStep={problemActiveStep}
            setProblemActiveStep={setProblemActiveStep}
            problemFormField={problemFormField}
            setProblemFormField={setProblemFormField}
            _handleNext={_handleNext}
            setIsNextdisabled={setIsNextdisabled}
            setActiveStepColor={setActiveStepColor}
          />
        );
      case 1:
        return (
          <Description
            descriptionFormField={descriptionFormField}
            setDescriptionFormField={setDescriptionFormField}
            descriptionActiveStep={descriptionActiveStep}
            _handleNext={_handleNext}
            setNextHide={setNextHide}
            setIsNextdisabled={setIsNextdisabled}
          />
        );
      case 2:
        return (
          <Client
            clientFormField={clientFormField}
            setClientFormField={setClientFormField}
            clientActiveStep={clientActiveStep}
            _handleNext={_handleNext}
            setIsNextdisabled={setIsNextdisabled}
            setNextHide={setNextHide}
          />
        );
      case 3:
        return <Appointment />;
      case 4:
        return <Confirm />;
      default:
        return <Thanks setActiveStepColor={setActiveStepColor} />;
    }
  }

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    // alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    _handleNext();
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      _handleNext();
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  return (
    // <React.Fragment>
    <Box component="div" className={classes.boxWrapper}>  
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "40px",
          position: "relative",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          style={{
            color: "black",
            padding: "13px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.1em",
            textTransform: "upperCase",
          }}
        >
          CREATE APPOINTMENT
        </Typography>
        <Box
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            right: "10px",
            top: "calc(50% - 20px/2)",
            fontWeight: "300",
            fontSize: "20px",
            lineHeight: "20px",
            display: "flex",
            alignItems: "center",
            textAlign: "right",
          }}
        >
          <SvgIcon component={CrossIcon} />
        </Box>
      </Box>
      <Stepper
        activeStep={activeStep}
        style={{
          boxSizing: "border-box",
          height: "88px",
          left: "0px",
          right: "0px",
          top: "40px",
          background: "#F5F8FB",
          borderBottom: "1px solid #DDE1EB",
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box className={classes.h100}>
        <Formik
          initialValues={formInitialValues}
          //validationSchema={currentValidationSchema}
          onSubmit={_handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form id={formId} className={problemActiveStep===1? classes.boxWrapper:'justifyBetween '+ classes.boxWrapper}>
              {_renderStepContent(activeStep)}
              {activeStep !== 0 && activeStep !== steps.length && (
                <ButtonAppBar
                  nextHide={nextHide}
                  _handleBack={_handleBack}
                  isSubmitting={isSubmitting}
                  isNextdisabled={isNextdisabled}
                  isLastStep={isLastStep}
                />
              )}
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
    // </React.Fragment>
  );
}
