import * as Yup from 'yup';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    country,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv
  }
} = checkoutFormModel;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.label} is required`),
    [lastName.name]: Yup.string().required(`${lastName.label} is required`),
    [address1.name]: Yup.string().required(`${address1.label} is required`),
    [city.name]: Yup.string().required(`${city.label} is required`),
    [zipcode.name]: Yup.string().required(`${zipcode.label} is required`),
    [country.name]: Yup.string().required(`${country.label} is required`)
  }),
  Yup.object().shape({
    [nameOnCard.name]: Yup.string().required(`${nameOnCard.label} is required`),
    [cardNumber.name]: Yup.string().required(`${cardNumber.label} is required`),
    [expiryDate.name]: Yup.string().required(`${expiryDate.label} is required`),
    [cvv.name]: Yup.string().required(`${cvv.label} is required`)
  })
];
