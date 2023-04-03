import React, { useEffect, useState } from "react";
import CustomerType from "./CustomerType";
import CustomerDetail from "./CustomerDetail";
import CustomerAddress from "./CustomerAddress";

export default function Client(props) {
  const {
    clientFormField,
    setClientFormField,
    clientActiveStep,
    _handleNext,
    setIsNextdisabled,
    setNextHide,
  } = props;
  const [customerType, setCustomerType] = useState("");
  // const currentValidationSchema = validationSchema[activeStep];

  function _setClientFormData(keyName, value) {
    setClientFormField({ ...clientFormField, [keyName]: value });
  }

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <CustomerType
            setCustomerType={setCustomerType}
            setNextHide={setNextHide}
            _handleNextStep={_handleNext}
          />
        );
      case 1:
        return (
          <CustomerDetail
            customerType={customerType}
            _setClientFormData={_setClientFormData}
            setIsNextdisabled={setIsNextdisabled}
            setNextHide={setNextHide}
          />
        );
      case 2:
        return (
          <CustomerAddress
            customerType={customerType}
            _setClientFormData={_setClientFormData}
            _handleNext={_handleNext}
            setIsNextdisabled={setIsNextdisabled}
          />
        );
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <React.Fragment>{_renderStepContent(clientActiveStep)}</React.Fragment>
  );
}
