// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, TableChart, BarChart, CalendarToday, Assignment } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/tables">
          <ListItemIcon><TableChart /></ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem button component={Link} to="/charts">
          <ListItemIcon><BarChart /></ListItemIcon>
          <ListItemText primary="Charts" />
        </ListItem>
        <ListItem button component={Link} to="/calendar">
          <ListItemIcon><CalendarToday /></ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button component={Link} to="/kanban">
          <ListItemIcon><Assignment /></ListItemIcon>
          <ListItemText primary="Kanban" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
