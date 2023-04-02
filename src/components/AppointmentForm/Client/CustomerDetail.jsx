import React, { useEffect, useState } from "react";
import NewCustomerDetail from "./ClientInfo/NewCustomerDetail";
import ExistingCustomerDetail from "./ClientInfo/ExistingCustomerDetail";

const CustomerDetail = (props) => {
  const {
    customerType,
    _setClientFormData,
    setIsNextdisabled,
    setNextHide,
  } = props;

  useEffect(() => {
    setNextHide(false);
  }, []);

  return (
    <>
      {customerType === "newCustomer" ? (
        <NewCustomerDetail
          setIsNextdisabled={setIsNextdisabled}
          _setClientFormData={_setClientFormData}
        />
      ) : (
        <ExistingCustomerDetail
          setIsNextdisabled={setIsNextdisabled}
          _setClientFormData={_setClientFormData}
        />
      )}
    </>
  );
};

export default CustomerDetail;
