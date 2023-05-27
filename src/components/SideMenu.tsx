import React from 'react'
import { makeStyles, withStyles } from "@mui/styles";

const style:{} = {
    "sideMenu" : {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "0px",
        width: "320px",
        height: "100%",
        backgroundColor: "#253053"
    }
}

function SideMenu(props:any) {
    const classes = props
  return (
    <div className={props.classes.sideMenu} >SideMenu</div>
  )
}

export default withStyles(style)(SideMenu)