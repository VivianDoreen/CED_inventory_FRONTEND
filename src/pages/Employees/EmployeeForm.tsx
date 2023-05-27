import { Grid, TextField, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, {useState, useEffect} from 'react'
import {useForm, Form} from '../../components/useForm'

const initialFieldValues = {
    id:0,
    fullName:'Nabulo',
    email:'',
    mobile:0,
    city:'',
    gender:'female',
    departmentId:0,
    hiredDate:new Date(),
    isPermanent:false
}

function EmployeeForm() {
    const {values, setValues, handleInputChange } = useForm(initialFieldValues)

    // const useEffect(()=>{},[])
  return (
    <div>
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant='outlined'
                        label='Full Name'
                        name='fullName'
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <TextField
                    variant='outlined'
                    label='Email'
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </Form>
    </div>
  )
}

export default EmployeeForm