import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  Radio,
  FormControl,
  FormControlLabel,
  FormHelperText,
  RadioGroup
} from '@material-ui/core';

const RadioField = (props) => {
  const { label, data, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { value: selectedValue } = field;
  const { setValue } = helper;

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  function _onChange(e) { //console.log(e) 
    setValue(e.target.checked);
  }

  return (
    <FormControl {...rest}>
        <RadioGroup row {...field} value={selectedValue ? selectedValue : ''} >
            {data.map((item, index) => (
            <FormControlLabel
                label={item.label}
                key={index}
                value={item.value}
                control={<Radio onChange={_onChange}/>}
            />
            ))}
        </RadioGroup>
      {_renderHelperText()}
    </FormControl>
  );
}


RadioField.defaultProps = {
    data: []
};
  
RadioField.propTypes = {
    data: PropTypes.array.isRequired
};

export default RadioField;
