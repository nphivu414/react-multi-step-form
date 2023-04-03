import AppointmentFormModel from "./appointmentFormModel";
const {
  problemFormField: { service, serviceType, serviceIssues },
  descriptionFormIntialValues: {
    systemAge,
    unitLocated,
    DiagnosticFee,
    AdditionalInfo,
  },
  ClientFormIntialValues: { clientType, clientDetail, clientAddress },
} = AppointmentFormModel;

export default {
  problemIntialValues: {
    [service.name]: "",
    [serviceType.name]: "",
    [serviceIssues.name]: "",
  },
  descriptionIntialValues: {
    [systemAge.name]: "",
    [unitLocated.name]: "",
    [DiagnosticFee.name]: false,
    [AdditionalInfo.name]: "",
  },
  clientIntialValues: {
    [clientType.name]: "",
    [clientDetail.name]: "",
    [clientAddress.name]: "",
  },
};
