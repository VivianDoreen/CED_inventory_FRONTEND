import React , {useState} from 'react'
import { Grid, TextField, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

interface initialFieldValues {
    id:number,
    fullName:string,
    email:string,
    mobile:string,
    city:string,
    gender:string,
    departmentId:string,
    hiredDate: any,
    isPermanent:boolean
  }

interface error {
    firstName:string
}
export function useForm(initialFieldValues:initialFieldValues, validateOnChange=false, validate:any) {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({fullName:'', email:'', mobile:'', city:'', departmentId:''})
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
        if (validateOnChange)
          validate({[name]: value})
    }

    const resetForm = () =>{
      setValues(initialFieldValues)
      setErrors({fullName:'', email:'', mobile:'', city:'', departmentId:''})
    }

  return {
    values, setValues, errors, setErrors, handleInputChange, resetForm
  }
}


const useStyles = makeStyles((theme:Theme) =>({
    root:{
        '& .MuiFormControl-root':{
            width:'80%', 
            margin:theme.spacing(1)
        }
    }
}))

export function Form(props:any) {
  const {children, ...other} = props 
  const classes = useStyles()
  return (
    <form className={classes.root} autoComplete='off' {...other}>
        {props.children}
    </form>
  )
}
