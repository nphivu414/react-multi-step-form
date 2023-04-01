export default {
  formId: "checkoutForm",
  problemFormField: {
    service: {
      name: "service",
      label: "Service*",
      requiredErrorMsg: "service name is required",
    },
    serviceType: {
      name: "serviceType",
      label: "Service Type*",
      requiredErrorMsg: "service type is required",
    },
    serviceIssues: {
      name: "serviceIssues",
      label: "Service Issues*",
      requiredErrorMsg: "service issues is required",
    },
  },
  descriptionFormIntialValues: {
    systemAge: {
      name: "systemAge",
      label: "System Age*",
    },
    unitLocated: {
      name: "unitLocated",
      label: "unit Located*",
    },
    DiagnosticFee: {
      name: "DiagnosticFee",
      label: "Diagnostic Fee*",
    },
    AdditionalInfo: {
      name: "AdditionalInfo",
      label: "Additional Info*",
    },
  },
  ClientFormIntialValues: {
    clientType: {
      name: "clientType",
      label: "Client Type*",
    },
    clientDetail: {
      name: "clientDetail",
      label: "Client Detail*",
    },
    clientAddress: {
      name: "clientAddress",
      label: "Client Address*",
    },
  },
};
