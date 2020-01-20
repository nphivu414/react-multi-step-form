import * as Yup from 'yup';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: { firstName, lastName, address1, city, zipcode, country }
} = checkoutFormModel;

export default Yup.object().shape({
  [firstName.name]: Yup.string().required(`${firstName.label} is required`),
  [lastName.name]: Yup.string().required(`${lastName.label} is required`),
  [address1.name]: Yup.string().required(`${address1.label} is required`),
  [city.name]: Yup.string().required(`${city.label} is required`),
  [zipcode.name]: Yup.string().required(`${zipcode.label} is required`),
  [country.name]: Yup.string().required(`${country.label} is required`)
});
