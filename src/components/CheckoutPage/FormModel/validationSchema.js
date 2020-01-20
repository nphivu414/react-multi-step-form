import * as Yup from 'yup';
export default Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});
