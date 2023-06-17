import { FormControl, FormControlLabel, Checkbox as MUICheckbox } from '@mui/material'
import React from 'react'

function Checkbox(props:{name:string, label:string, value:boolean, onChange:any}) {
    const {name, label, value, onChange} = props
    const convertToDefEventParameter = (name:string, value:boolean) => {
        return({
        target:{
            name, value
        }
    })}
  return (
    <FormControl>
        <FormControlLabel 
              control={<MUICheckbox
                  name={name}
                  color="primary"
                  checked={value}
                  onChange={e => onChange(convertToDefEventParameter(name, e.target.checked))} />} 
                  
                  label={label}       
        />
    </FormControl>
  )
}

export default Checkbox