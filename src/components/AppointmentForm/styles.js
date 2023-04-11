import { makeStyles } from "@material-ui/core/styles";
import { Calculate } from "@mui/icons-material";
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
    maxHeight: "100%",
    height: "auto",
  },
  textFieldDiv: {
    "& div.MuiInputBase-root": {
      padding: "8px 16px !important",
    },
    "& div.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{
      padding: "13px 16px !important",
    },
    "& .MuiIconButton-root":{
      padding: '0 5px'
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline":{
      top:0
    },
    "& div.MuiInputBase-root Input.MuiInputBase-input": {
      padding: "0px !important",
      height: "32px",
    },
    "& div.css-wb57ya-MuiFormControl-root-MuiTextField-root":{
      // maxHeight:'378px' , 
      scrollbarWidth: 'thin',
      '&::-webkit-scrollbar': {
        width: '0.4em',
      },
      '&::-webkit-scrollbar-track': {
        background: "#f1f1f1",
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#555'
      }
    }
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
  boxWrapper: {
    display:'flex',
    flexFlow:'column',
    height:'100%',
    "& .justifyBetween":{
      justifyContent: 'space-between'
    }
  },
  h100:{
    height:'100%'
  },
  checkField:{
    "&$checked":{
      color: '#007BFF !important'
    },
    "& .MuiSvgIcon-root": { 
      fontSize: 24, 
      strokeWidth:0.2, 
      stroke:'#C5CEE0' 
    }
  },
  checked: {},
  selectMenuList:{
    height:'378px' , 
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      background: "#f1f1f1",
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#888',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555'
    }
  },
  calenderWrap:{
    display:'flex',
    flexFlow:'column',
    justifyContent:'space-between',
    height:'100%'
  },
  calenderField:{    
    "& .react-calendar button":{
      width:'2rem',
      height:'2rem',
      display:'inline-flex',
      alignItems:'center',
      justifyContent:'center'
    }
  }
}));

export default appointmentFormStyle;
