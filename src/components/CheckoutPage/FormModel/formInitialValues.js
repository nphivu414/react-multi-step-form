import checkoutFormModel from './checkoutFormModel';
const {
  formField: { firstName, lastName, address1, city, zipcode, country }
} = checkoutFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [address1.name]: '',
  [city.name]: '',
  [zipcode.name]: '',
  [country.name]: ''
};
