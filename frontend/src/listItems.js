import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LayersIcon from '@mui/icons-material/Layers';

import { Link } from 'react-router-dom';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ClassIcon from '@mui/icons-material/Class';
import HistoryIcon from '@mui/icons-material/History';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const mainListItems =(
  <React.Fragment>
      <Link to={"/dashboard"}>
    <ListItemButton selected={true}  >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
      </Link>
    <Link to={"/admission"}>
    <ListItemButton>
      <ListItemIcon>
        <PersonAddAlt1Icon />
      </ListItemIcon>
      <ListItemText primary="Adminssion" />
    </ListItemButton>
      </Link>
      <Link to={"/account"}>
    <ListItemButton>
      <ListItemIcon>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItemButton>
    </Link>
    <Link to={"/staff"}>
    <ListItemButton>
      <ListItemIcon>
        <ManageAccountsIcon />
      </ListItemIcon>
      <ListItemText primary="Staff" />
    </ListItemButton>
    </Link>
    <Link to={"/classes"}>
    <ListItemButton>
      <ListItemIcon>
        <ClassIcon />
      </ListItemIcon>
      <ListItemText primary="Classes" />
    </ListItemButton>
    </Link>
    <Link to={"/session"}>
    <ListItemButton>
      <ListItemIcon>
        <CalendarMonthIcon />
      </ListItemIcon>
      <ListItemText primary="Session" />
    </ListItemButton>
    </Link>
    <Link to={"/admission"}>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
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