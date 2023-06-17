import React from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@mui/material'

function RadioGroup(props:{name:string, label:string, value: string, onChange: any, items:any}) {
    const {name, label, value, onChange, items} = props
  return (
    <FormControl>
        <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
            name={name}
            value={value}
            onChange={onChange}
            >
                {items.map((item:any)=>(<FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title}/> ))}
            
            {/* <FormControlLabel value="female" control={<Radio />} label="Female"/>
            <FormControlLabel value="other" control={<Radio />} label="Other"/> */}
        </MuiRadioGroup>
    </FormControl>
    )
}

export default RadioGroup