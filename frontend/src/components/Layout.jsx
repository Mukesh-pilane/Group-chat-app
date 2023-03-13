import React from 'react';
import {makeStyles} from '@mui/styles'
import {Toolbar, CssBaseline, Box} from '@mui/material'
import SideBar from "../containers/Sidebar"



const drawerWidth =300;

const useStyles = makeStyles((theme) => {
  return{
  page:{
    background: '#f9f9f9',
    width: '100%',
    height: '100vh'
  },
  drawer:{
    width: drawerWidth
  },
  drawerPaper:{
    width: drawerWidth
  },
  root:{
    display:'flex',
  },
  active:{
    background: '#f4f4f4'
  }
  }
})




const Layout = ({children, handleDrawerToggle, mobileOpen}) =>{
  
  const classes = useStyles();
  
  
  
  
  
  
  
  
  
  return(
    <div className={classes.root}>
  
      <CssBaseline />

      
      
      <SideBar 
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
      />
    <Box className={classes.page}
    component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
    <Toolbar />
    {children}
    </Box>
    </div>
    );
}

export default Layout;