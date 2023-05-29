import React from 'react';
import { Typography, Grid } from '@mui/material';

function PaymentDetails(props) {
  const { formValues } = props;
  const { firstName, lastName, address1 } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom>
        Shipping
      </Typography>
      <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
      <Typography gutterBottom>{`${address1}`}</Typography>
    </Grid>
  );
}

export default PaymentDetails;
