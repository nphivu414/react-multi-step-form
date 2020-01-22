export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      error: 'First name is required'
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      error: 'Last name is required'
    },
    address1: {
      name: 'address1',
      label: 'Address Line 1*',
      error: 'Address Line 1 is required'
    },
    address2: {
      name: 'address2',
      label: 'Address Line 2'
    },
    city: {
      name: 'city',
      label: 'City*',
      error: 'City is required'
    },
    state: {
      name: 'state',
      label: 'State/Province/Region'
    },
    zipcode: {
      name: 'zipcode',
      label: 'Zipcode*',
      error: 'Zipcode is required'
    },
    country: {
      name: 'country',
      label: 'Country*',
      error: 'Country is required'
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Use this address for payment details'
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Name on card*',
      error: 'Name on card is required'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Card number*',
      error: 'Card Number is required'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Expiry date*',
      error: 'Expiry date is required'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      error: 'CVV is required'
    }
  }
};
