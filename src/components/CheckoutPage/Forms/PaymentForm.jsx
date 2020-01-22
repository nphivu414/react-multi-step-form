import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField } from '../../FormFields';

export default function PaymentForm(props) {
  const {
    formField: { nameOnCard, cardNumber, expiryDate, cvv }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={nameOnCard.name}
            label={nameOnCard.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={cardNumber.name}
            label={cardNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={expiryDate.name}
            label={expiryDate.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={cvv.name} label={cvv.label} fullWidth />
        </Grid>
        {/* <Grid item xs={12}>
        <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
