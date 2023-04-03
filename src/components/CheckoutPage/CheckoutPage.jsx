import React, { useState } from 'react';
import "./CheckoutPage.css";
//import {  ModalHeader } from 'reactstrap';
//import { X } from 'react-feather';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Formik, Form } from 'formik';
import AddressForm from './Forms/AddressForm';
import PaymentForm from './Forms/PaymentForm';
import ReviewOrder from './ReviewOrder';
import ResponsiveDatePickers from './ReviewOrder/ResponsiveDatePickers';
import LastStep from './ReviewOrder/LastStep';
import CheckoutSuccess from './CheckoutSuccess';
import StepProgramoneChild from './ReviewOrder/StepProgramoneChild';
import StepProgramtwoChild from './ReviewOrder/StepProgramtwoChild'; 
import StepDescriptiononeChild from './ReviewOrder/StepDescriptiononeChild';
import StepDescriptiontwoChild from './ReviewOrder/StepDescriptiontwoChild';
import ExistingCustomerStepone from './ReviewOrder/CleintInfo/ExistingCustomerStepone';
import ExistingCustomerSteptwo from './ReviewOrder/CleintInfo/ExistingCustomerSteptwo';
import NewCustomerStepone from './ReviewOrder/CleintInfo/NewCustomerStepone';
import NewCustomerSteptwo from './ReviewOrder/CleintInfo/NewCustomerSteptwo';
//import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import useStyles from './styles';
//import { upperCase } from 'lodash';

const steps = ['PROBLEM','DESCRIPTION','CLEINT INFO','APPOINTMENT','CONFIRM']
const { formId, formField } = checkoutFormModel;
// const [modal, setmodal] = useState(false)
//  const CloseBtn = (
//   <X className="cursor-pointer" size={15} onClick={() => setmodal(!modal)} />
// );     

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm/>;
      // return [<AddressForm formField={formField} />,<StepProgramoneChild />,<StepProgramtwoChild/>];
    // case 1:
    //   return <StepProgramoneChild />;
    // case 2:
    //   return <StepProgramtwoChild/>;
    case 1:
     return [<PaymentForm formField={formField} />,<StepDescriptiononeChild/>,<StepDescriptiontwoChild/>];
    // case 4:
    //   return <StepDescriptiononeChild/>;
    // case 5:
    //     return <StepDescriptiontwoChild/>;
    case 2: 
       return [<ReviewOrder />,<ExistingCustomerStepone/>,<ExistingCustomerSteptwo/>,<NewCustomerStepone/>,<NewCustomerSteptwo/>];
    // case 7:
    //    return <ExistingCustomerStepone/>;
    // case 8: 
    //    return <ExistingCustomerSteptwo/>;
    // case 9:
    //   return <NewCustomerStepone/>;
    // case 10:
    //   return <NewCustomerSteptwo/>;
    case 3:
        return <ResponsiveDatePickers/>;
    case 4:
      return <LastStep/>;
    default:
      return;
      // return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  //const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <div 
      style={{display: 'flex', justifyContent: 'space-between', boxShadow: ' 0px 4px 41px rgba(0, 0, 0, 0.75)'}}>
    <Typography style={{
      backgroundColor: '#fff',
      color: 'black',
      padding: '13px',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.1em',
      textTransform: 'upperCase'
      }}>
    CREATE APPOINTMENT
    </Typography>

    <Button style={{color: 'black'}} startIcon={<CancelOutlinedIcon />}>
      </Button>
    </div>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step> 
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            //validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}
              
              >
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button style={{color: 'black'}} onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      
                      {isLastStep ? 'Confirm appointment' : 'Next' 
                      }
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                        
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
