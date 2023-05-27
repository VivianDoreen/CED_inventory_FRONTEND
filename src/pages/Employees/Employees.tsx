import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader'
import Paper from '@mui/material/Paper'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { makeStyles } from '@mui/styles';
import {Theme} from '@mui/material'

const useStyles = makeStyles((theme:Theme)=>({
  pageContent:{
    margin:theme.spacing(5),
    padding:theme.spacing(3)
  }
}))

function Employees() {
  const classes = useStyles()
  return (
    <div> 
        <PageHeader
        title='New Employee'
        subtitle='Form Design with validation'
        icon={<PeopleOutlineIcon fontSize='large'/>}
        />
        <Paper className={classes.pageContent}>
          <EmployeeForm/>
        </Paper>
    </div>
  )
}

export default Employees