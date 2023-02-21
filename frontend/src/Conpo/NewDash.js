import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import { mainListItems, secondaryListItems } from "../listItems";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LayersIcon from "@mui/icons-material/Layers";

import { Link } from "react-router-dom";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ClassIcon from "@mui/icons-material/Class";
import HistoryIcon from "@mui/icons-material/History";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from '@mui/material/ListItemIcon';

import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import Admin from "./fRouter/Admin";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../actions/userAction";
import { ToastContainer, toast as alert } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7),
      },
    }),
  },
}));

const mdTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function Dashboard({
  Dtitle,
  Admin,
  Dash,
  admiss,
  account,
  staffs,
  classs,
  sessions,
  tools,
}) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const mainListItems = (
    <React.Fragment >
      <Link to={"/dashboard"}>
        <ListItemButton selected={Dash}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link to={"/admission"}>
        <ListItemButton selected={admiss}>
          <ListItemIcon>
            <PersonAddAlt1Icon />
          </ListItemIcon>
          <ListItemText primary="Adminssion" />
        </ListItemButton>
      </Link>
      <Link to={"/account"}>
        <ListItemButton selected={account}>
          <ListItemIcon>
            <AccountBalanceWalletIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItemButton>
      </Link>
      <Link to={"/staff"}>
        <ListItemButton selected={staffs}>
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Staff" />
        </ListItemButton>
      </Link>
      <Link to={"/classes"}>
        <ListItemButton selected={classs}>
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary="Classes" />
        </ListItemButton>
      </Link>
      <Link to={"/session"}>
        <ListItemButton selected={sessions}>
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText primary="Session" />
        </ListItemButton>
      </Link>
      <Link to={"/admintools"}>
        <ListItemButton selected={tools}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Admin Tools " />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );

  const secondaryListItems = (
    <React.Fragment >
      <ListSubheader component="div" inset className="">
        Recent Activity
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="Admission" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="Fees" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="User" />
      </ListItemButton>
    </React.Fragment>
  );

  const handleLogout = () => {
    dispatch(logout());
    alert.success("Logout Successfully..");
    // dispatch(loadUser)
    window.location.reload(true);
    // history.push("/login")
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }} className="bg-black">
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {Dtitle}
            </Typography>
            <div className="">
              <img
                src="/artBoard1.png"
                className="absolute top-0 w-24 p-0 bg-white border-8 border-white border-solid rounded-full drop-shadow-lg right-[44%] "
              />
            </div>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open1 ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>
                    {user.name.slice(0, 1).toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
            
              anchorEl={anchorEl}
              id="account-menu"
              open={open1}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Avatar />{" "}
                {user ? user.name.slice(0, 4).toUpperCase() : "Profile"}
              </MenuItem>
              <MenuItem>
                <Avatar /> My Activity
              </MenuItem>
              <Divider />
              {/* <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}  className="">
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}

          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List
            component="nav"
            // colour for sidebar
            // className="bg-gradient-to-t from-blue-500 to-cyan-500 ..."
          >
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            // backgroundColor: (theme) =>
            //   theme.palette.mode === "light"
            //     ? theme.palette.grey[100]
            //     : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
          // className="bg-gradient-to-t from-green-500 via-white to-orange-600 ..."
          className="bg-[#fef08a]"
        >
          <Toolbar />
          <Container
            maxWidth="lg"
            sx={{
              mt: 2,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyItems: "center",
            }}
            className=""
          >
            {Admin}
            {/* <Admin/> */}
          </Container>
        </Box>
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
}
