import React, { useEffect, useState } from "react";
import NewCustomerAddress from "./ClientInfo/NewCustomerAddress";
import ExistingCustomerAddress from "./ClientInfo/ExistingCustomerAddress";

const CustomerAddress = (props) => {
  const { customerType, _setClientFormData, setIsNextdisabled } = props;

  return (
    <>
      {customerType === "newCustomer" ? (
        <NewCustomerAddress />
      ) : (
        <ExistingCustomerAddress />
      )}
    </>
  );
};

export default CustomerAddress;
