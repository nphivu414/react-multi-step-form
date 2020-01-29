import React, { useState } from 'react';
import { useField } from 'formik';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function DatePickerField(props) {
  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  console.log('TCL: DatePickerField -> meta', meta);
  console.log('TCL: DatePickerField -> field', field);
  const [selectedDate, setSelectedDate] = useState(
    new Date('2020-01-29T12:11:54')
  );

  function _onChange(date) {
    // setSelectedDate(date);
    if (date) {
      try {
        const ISODateString = date.toISOString();
        console.log('TCL: function_onChange -> ISODateString', ISODateString);
        setSelectedDate(date);
        setValue(ISODateString);
      } catch (error) {
        setSelectedDate(date);
        setValue(date);
      }
    } else {
      setValue(date);
    }
  }

  return (
    <Grid container justify="space-around">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          {...field}
          {...props}
          value={selectedDate}
          onChange={_onChange}
          error={isError}
          invalidDateMessage={isError && error}
          helperText={isError && error}
        />
      </MuiPickersUtilsProvider>
    </Grid>
  );
}
