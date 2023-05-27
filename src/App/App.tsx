import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import { makeStyles, withStyles } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, colors } from '@mui/material';
// import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';
import Employees from '../pages/Employees/Employees';

const theme = createTheme({
  status:{
    danger:'#e53e3e'
  },
  palette:{
    secondary:{
      main:colors.red[500]
    },
    background:{
      default:'#f4f5fd'
    },
    neutral:{
      main:colors.grey[500],
      darker:colors.grey[700]
    }
  },
  // shape:{
  //   borderRadius:'12px'
  // }
})


const useStyle = makeStyles({
  appMain:{
    paddingLeft:"320px",
    width:"100%"
  }
})

function App() {
  const classes = useStyle()
  return (
    <ThemeProvider theme={theme}>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
        <Employees/>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default (App);
