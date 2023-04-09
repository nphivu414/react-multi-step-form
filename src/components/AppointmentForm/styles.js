import { makeStyles } from "@material-ui/core/styles";
const appointmentFormStyle = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  myFormControlLabelRoot: {
    marginLeft: "0px",
    marginRight: "0px",
    "&:hover": {
      background: "#F8FBFD !Important",
      border: "1px solid #007BFF !Important",
      color: "#007BFF !Important",
    },
  },
  formDiv: { paddingBottom: "24px" },
  formDivWithHeight: {
    paddingBottom: "24px",
    maxHeight: "611px",
    height: "611px",
  },
  textFieldDiv: {
    "& div.MuiInputBase-root": {
      padding: "8px 16px !important",
    },
    "& div.MuiInputBase-root Input.MuiInputBase-input": {
      padding: "0px !important",
      height: "32px",
    },
  },
  formTitleTypoGraphy: {
    padding: "24px",
    paddingBottom: "0px",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "28px",
  },
  formTitleHr: {
    height: "2px",
    width: "24px",
    border: "none",
    background: "#007BFF",
    marginLeft: "0px",
    margin: 0,
    marginTop: "6px",
  },
  formTitleDiv: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "24px",
    margin: "auto",
  },
  formInstructionTypo: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "32px",
    color: "#4D4F59",
  },
  formAddressRadio: {
    "& span.MuiButtonBase-root": {
      padding: "0px !important",
      marginRight: "12px !important",
      height: "20px",
      width: "20px",
      background: "#F2F5FB",
      border: "1px solid #C5CEE0",
    },
  },
}));

export default appointmentFormStyle;
