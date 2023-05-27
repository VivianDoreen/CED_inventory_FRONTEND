import React , {useState} from 'react'
import { Grid, TextField, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

interface initialFieldValues {
    id:number,
    fullName:string,
    email:string,
    mobile:number,
    city:string,
    gender:string,
    departmentId:number,
    hiredDate: Date,
    isPermanent:boolean
  }

export function useForm(initialFieldValues:initialFieldValues) {
    const [values, setValues] = useState(initialFieldValues)
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

  return {
    values, setValues, handleInputChange
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
    const classes = useStyles()
  return (
    <form className={classes.root}>
        {props.children}
    </form>
  )
}
