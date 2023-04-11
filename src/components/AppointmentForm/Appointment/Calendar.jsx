// import * as React from 'react';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import DatePicker from 'sassy-datepicker';
// import 'sassy-datepicker/dist/styles.css';

// export default function Calendar() {
//   return (
//     // <LocalizationProvider dateAdapter={AdapterDayjs}>
//     //   <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
//     // </LocalizationProvider>
//     <DatePicker />
//   );
// }
import React  from 'react';

import { useState } from 'react';
import DatePicker from 'sassy-datepicker';
import 'sassy-datepicker/dist/styles.css';

function Calendar() {
  const [date, setDate] = useState(new Date());
  const onChange = newDate => {
    setDate(newDate);
  };

  return (
      <DatePicker onChange={onChange} value={date} />
  );
}


  export default Calendar;

