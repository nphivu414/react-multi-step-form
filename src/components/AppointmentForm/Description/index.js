import React, { useEffect, useState } from "react";
import SystemAgeStep from "./SystemAgeStep";
import DiagnosticFeeStep from "./DiagnosticFeeStep";
import AdditionalInfoStep from "./AdditionalInfoStep";

export default function Problem(props) {
  const {
    _handleNext,
    descriptionActiveStep,
    descriptionFormField,
    setDescriptionFormField,
    setIsNextdisabled,
    setNextHide,
  } = props;

  useEffect(() => {
    setNextHide(false);
  }, []);

  function _setDescriptionFormData(keyName, value) {
    setDescriptionFormField({ ...descriptionFormField, [keyName]: value });
  }

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <SystemAgeStep
            _setDescriptionFormData={_setDescriptionFormData}
            setIsNextdisabled={setIsNextdisabled}
          />
        );
      case 1:
        return (
          <DiagnosticFeeStep
            _setDescriptionFormData={_setDescriptionFormData}
            setIsNextdisabled={setIsNextdisabled}
          />
        );
      case 2:
        return (
          <AdditionalInfoStep
            _setDescriptionFormData={_setDescriptionFormData}
            _handleNext={_handleNext}
            setIsNextdisabled={setIsNextdisabled}
          />
        );
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <React.Fragment>{_renderStepContent(descriptionActiveStep)}</React.Fragment>
  ); 
}
