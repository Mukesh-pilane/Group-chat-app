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
} from "@mui/material";
import {gapi} from "gapi-script"
import {useEffect} from "react"
import { makeStyles } from "@mui/styles";
import { useNavigate, useLocation } from "react-router-dom";

import LogoutIcon from "@mui/icons-material/Logout";
import { useGoogleLogout } from 'react-google-login';

const drawerWidth = 240;

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

  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { window } = props;

  const menu = [
    {
      url: "k",
      username: "Kamlesh",
      socketId: "/test1",
    },
    {
      url: "an",
      username: "Aniket",
      socketId: "/test2",
    },
    {
      url: "ai",
      username: "Adi",
      socketId: "/test3",
    },
  ];

  const drawer = (
    <>
      <Toolbar
        variant="dense"
        className={classes.height}
        sx={{
          minHeight: 64,
        }}
      >
        <Typography>Menu</Typography>
      </Toolbar>
      <Divider />
      <List>
        {menu.map(function (item, i) {
          return (
            <div
            key={i}
              className={
                location.pathname === item.socketId ? classes.active : null
              }
            >
              <ListItem
                button
                onClick={() => {
                  navigate(item.socketId);
                  console.log(location.pathname)
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
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
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
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideBar;
