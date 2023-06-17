import TextField from '@mui/material/TextField'
import React from 'react'

function Input(props:{name:string, label:string, value: any, onChange: any, error?:any}) {
   const {name, label, value, error = null, onChange} = props
  return (
        <TextField
        variant='outlined'
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...(error && {error:true, helperText:error})}
        />
  )
}

export default Input