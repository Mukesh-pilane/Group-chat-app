import React from 'react';
import {makeStyles} from '@mui/styles'
import {Toolbar, CssBaseline, Box} from '@mui/material'
import Navbar from './Navbar'
import SideBar from "./Sidebar"



const drawerWidth =240;

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




const Layout = ({children}) =>{
  
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  
  
  
  
  
  
  
  return(
    <div className={classes.root}>
  
      <CssBaseline />

      <Navbar drawerWidth={drawerWidth}
      handleDrawerToggle={handleDrawerToggle}
      />
      
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