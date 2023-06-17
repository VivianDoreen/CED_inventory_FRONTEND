import { FormControl, InputLabel, Select as MUISelect, MenuItem, FormHelperText } from '@mui/material'

function Select(props:{label:string, name:string, value: string, onChange:any, options:any, error:any }) {
    const {label, name, value, onChange, options, error } = props
  return (
    <FormControl
        variant='outlined'
        {...(error && {error:true})}
    >
        <InputLabel>{label}</InputLabel>
        <MUISelect
            label={label}
            name={name}
            value={value}
            onChange={onChange}
        >
            <MenuItem value="">None</MenuItem>
            {
                options.map((item:any) => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>))
            }
        </MUISelect>
        {error && <FormHelperText>{error}</FormHelperText >}
    </FormControl>
  )
}

export default Select