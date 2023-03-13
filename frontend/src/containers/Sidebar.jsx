import {
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Drawer,
  Avatar,
  IconButton,
  Slide
} from "@mui/material";
import {gapi} from "gapi-script"
import {AnimatePresence, motion} from "framer-motion"

//icons imports
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

//hooks
import { useGoogleLogout } from 'react-google-login';
import React, {useEffect} from "react"
import {useSelector} from "react-redux"
import { makeStyles } from "@mui/styles";
import { useNavigate, useLocation } from "react-router-dom";

import Addfriend from "../components/Addfriend";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      width: "100%",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#DCD6F7",
    },
  };
});
const clientId = process.env.REACT_APP_CLIENT_ID

const SideBar = ({ mobileOpen, handleDrawerToggle }, props: Props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);
  const { window } = props;
  const {profilePicture} = useSelector((state) => state.user);

  
  

  const handleChecked = () => {
    setChecked((prev) => !prev);
  };
  
  
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId });
    });
    
  }, []);
  
  const onFailure = () => {
    console.log("failure");
  };

  const onLogoutSuccess = () =>{
    navigate('/login')
    console.log('success')
  }
 const {signOut} = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure
  }) 

  
  const menu = [
    {
      url: "k",
      username: "Kamlesh",
      userId: "/test1",
    },
    {
      url: "an",
      username: "Aniket",
      userId: "/test2",
    },
    {
      url: "ai",
      username: "Adi",
      userId: "/test3",
    },
  ];

  const drawer = (
    <div style={{position:"relative", zIndex:-1}}>
      <Toolbar
        variant="dense"
        sx={{
          minHeight: 64,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
           <Box 
           sx={{
            position: "absolute",
            left:5
           }}>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
      <Avatar src={profilePicture}
      sx={{
        height:"40px",
        width:"40px"
      }}
      />
            </IconButton>
           </Box>
           <Box
           sx={{
            flexGrow:1
           }}
           ></Box>
           <IconButton
           size="large"
           edge="end"
           aria-label="add user"
           color="inherit"
           onClick={handleChecked}
           >
           <PersonAddAltIcon/>

           </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {menu.map(function (item, i) {
          return (
            <div
            key={i}
              className={
                location.pathname === item.userId ? classes.active : null
              }
            >
              <ListItem
                button
                onClick={() => {
                  navigate(item.userId);
                }}
              >
                <ListItemIcon>{<Avatar >{item.username[0]}</Avatar>}</ListItemIcon>
                <ListItemText
                  primary={<Typography >{item.username}</Typography>}
                />
              </ListItem>
            </div>
          );
        })}

        <ListItem
          button
          onClick={() => {
            localStorage.clear();
            signOut()
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Typography >logout</Typography>}
          />
        </ListItem>
      </List>
    </div>
  );

  const drawerVariant = {
    hidden: { x: !checked? 0:-100},
    visible:{ x: !checked?-100:0}
  }


 
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          position:'relative',
          zIndex:2,
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
                {drawer}
        
        
      </Drawer>
      <AnimatePresence>
      {checked&&<Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          position:'relative',
          zIndex:4,
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <motion.div
        variants={drawerVariant}
        initial='hidden'
        animate='visible'
        exit={{ x: -300 }}
        >
          <Addfriend handleChecked={handleChecked}/>
        </motion.div>

      </Drawer>}
      </AnimatePresence>

      
    </Box>
  );
};

export default SideBar;
