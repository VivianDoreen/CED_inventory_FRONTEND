import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Theme } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';

const useStyle = makeStyles((theme:Theme)=>({
  root:{
    backgroundColor:theme.palette.primary.contrastText,
    transform:'translateZ(0)'
  },
  searchInput:{
    opacity:'0.6',
    padding:'0px 8px',
    fontSize:'0.8rem',
    '&:hover':{
      backgroundColor:'#f2f2f2',
    },
    '& .MuiSvgIcon-root':{
      marginRight:theme.spacing(1)
    }
  },
  btnRoot:{
    background:'orange'
  },
  btnLabel:{
    background:'black'
  }
}))
function Header() {
  const classes = useStyle()
  return (
    <AppBar className = {classes.root} position='static'>
    <Toolbar>
        <Grid container
        alignItems = 'center'>
            <Grid item>
                <InputBase
                className={classes.searchInput}
                placeholder='Search'
                startAdornment={<SearchIcon fontSize='small'/>}
                />
            </Grid>
            <Grid item sm>
            </Grid>
            <Grid item>
                <IconButton>
                  <Badge badgeContent={4} color='secondary'>
                    <NotificationsNoneIcon fontSize='small'/>
                  </Badge>
                </IconButton>
                <IconButton>
                  <Badge badgeContent={3} color='primary'>
                    <ChatBubbleOutlineIcon fontSize='small'/>
                  </Badge>
                </IconButton>
                <IconButton>
                    <PowerSettingsNewIcon fontSize='small'/>
                </IconButton>
            </Grid>
        </Grid>
    </Toolbar>
    </AppBar>
  )}


export default Header