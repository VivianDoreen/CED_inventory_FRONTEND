import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, {useState, useEffect} from 'react'
import {useForm, Form} from '../../components/useForm'
import {Controls} from '../../components/controls/Controls'
import * as employeeService from '../../services/employeeServices'
import { error, log } from 'console'

const initialFieldValues = {
    id:0,
    fullName:'',
    email:'',
    mobile:'0',
    city:'',
    gender:'female',
    departmentId:'',
    hiredDate:new Date(),
    isPermanent:false
}

const genderItems = [
    {id:'male', title:'Male'},
    {id:'female', title:'Female'},
    {id:'other', title:'Other'},
]

function EmployeeForm() {

    const validate = (fieldValues=values) => {
    //save the vlidation error message in temp
    let temp:any = {...errors}
    if ('fullName' in fieldValues)
        temp.fullName = values.fullName? '': 'This field is required'
    if ('email' in fieldValues)
        temp.email = new RegExp(/$^|.+@.+..+/).test(values.email)? '': 'Email is not valid'
    if ('mobile' in fieldValues)
        temp.mobile = values.mobile.length > 9? '': 'Minimum 10 numbers required'
    if ('city' in fieldValues)
        temp.city = values.city? '': 'This field is required'
    if ('fullName' in fieldValues)
        temp.departmentId = values.departmentId.length !=0? '': 'This field is required'

    setErrors({
        ...temp
    })

    if (fieldValues == values)
         return Object.values(temp).every(x => x =="")
 }

 const {values, setValues, errors, setErrors, resetForm, handleInputChange } = useForm(initialFieldValues, true, validate)


    console.log(errors);
    
    const handleSubmit = (e:any) =>{
        e.preventDefault()
        if (validate())
            window.alert('testing ...')
    }


  return (
    <div>
        <Form onSubmit = {handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                   <Controls.Input 
                        name='fullName' 
                        label='Full Name' 
                        value={values.fullName} 
                        onChange={handleInputChange}
                        error = {errors.fullName}
                    />
                    <Controls.Input
                        name='email'
                        label='Email'
                        value={values.email}
                        onChange={handleInputChange}
                        error = {errors.email}
                    />
                     <Controls.Input
                        name='mobile'
                        label='Mobile'
                        value={values.mobile}
                        onChange={handleInputChange}
                        error = {errors.mobile}
                    />
                     <Controls.Input
                        name='city'
                        label='City'
                        value={values.city}
                        onChange={handleInputChange}
                        error = {errors.city}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup 
                        name='gender'
                        label='Gender'
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name='departmentId'
                        label='Deapartment'
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollections()}
                        error = {errors.departmentId}
                    />
                    <Controls.DatePicker
                        label='Hired Date'
                        onChange = {handleInputChange}
                    />
                    <Controls.Checkbox
                        name='isPermanent'
                        label='Permanent Employee'
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                            text ='Submit'
                            type = 'submit'
                            onClick = {handleSubmit}
                        />
                        <Controls.Button
                            onClick={resetForm}
                            color='secondary'
                            text ='Reset'
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    </div>
  )
}

export default EmployeeForm