import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-ui/core";
import appointmentFormStyle from "../styles";
export default function CustomerType(props) {
  const classes = appointmentFormStyle();
  const { setCustomerType, setNextHide, _handleNextStep } = props;

  useEffect(() => {
    setNextHide(true);
  }, []);

  return (
    <React.Fragment>
      <div className={classes.formDivWithHeight}>
        <div className="rectangle">
          <Typography variant="h5">FIX</Typography>
        </div>
        {/* <ProductDetails /> */}

        <div className="two-btn">
          <Button
            onClick={() => {
              setCustomerType("existingCustomer");
              _handleNextStep();
            }}
            className="exist"
            style={{ background: "#007BFF" }}
          >
            I am an existing customer
          </Button>

          <Button
            onClick={() => {
              setCustomerType("newCustomer");
              _handleNextStep();
            }}
            className="new"
            style={{ background: "#EDF1F7", color: "black" }}
          >
            I am a new customer
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
