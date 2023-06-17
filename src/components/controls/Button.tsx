import React from 'react'
import {Button as MuiButton, Theme} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme:Theme) =>({
    root:{
            margin:theme.spacing(.5)
        },
        label:{
            textTransform:'none'
        }
    }))

function Button(props:any) {
    const {variant, size, color, onClick, text, ...other} = props
    const classes = useStyles()
  return (
    <MuiButton
    variant = {variant || 'contained'}
    size = {size || 'large'}
    color = {color || 'primary'}
    onClick = {onClick}
    {...other}
    classes = {{root:classes.root, contained:classes.label}}
    >
        {text}
    </MuiButton>
  )
}

export default Button