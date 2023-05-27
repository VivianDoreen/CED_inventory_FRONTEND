import React from 'react'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyle = makeStyles((theme:Theme) => ({
    root:{
        background:'#fdfdff',
    },
    pageHeader:{
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:0.6
        }
    }

}))
function PageHeader(props:any) {
    const {title, subtitle, icon} = props
    const classes = useStyle()
  return (
    <Paper className = {classes.root} elevation={0} square>
        <div className={classes.pageHeader}>
            <Card className={classes.pageIcon}>
                {icon}
            </Card>
            <div className={classes.pageTitle}>
                <Typography variant='h6' component='div'>
                    {title}
                </Typography>
                <Typography variant='subtitle2' component='div'>
                    {subtitle}
                </Typography>

            </div>
        </div>
    </Paper>
  )
}

export default PageHeader