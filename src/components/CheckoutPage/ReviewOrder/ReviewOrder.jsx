import React from 'react';
//import { useFormikContext } from 'formik';
import { Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import ProductDetails from './ProductDetails';
// import ShippingDetails from './ShippingDetails';
// import PaymentDetails from './PaymentDetails';

export default function ReviewOrder() {
  //const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <div className='rectangle'>
      <Typography variant="h5">
        FIX  
      </Typography>
      </div>
      {/* <ProductDetails /> */}
     
      <div className='two-btn'>
      <Button 
      className='exist' 
      style={{background: "#007BFF"}}
      >I am an existing customer</Button>

      <Button
       className='new'
       style={{background: "#EDF1F7",
      color: 'black'}}
      >I am a new customer</Button>
      </div>
    </React.Fragment>
  );
}
