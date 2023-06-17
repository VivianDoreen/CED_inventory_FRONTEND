import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker} from '@mui/x-date-pickers/DatePicker';

export default function DatePicker(props:{label?:string, name?:string, value?:any, onChange?:any}) {
    const {label, value, onChange} = props
    const convertToDefEventParameter = (name:string, value:boolean) => {
      return({
      target:{
          name, value
      }
  })}
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        label={label}
        format = 'MM/dd/yyyy'
      />
    </LocalizationProvider>
  );
}