// src/components/Notifications.js
import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Notifications as NotificationsIcon } from '@mui/icons-material';

const Notifications = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <NotificationsIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Notification 1</MenuItem>
        <MenuItem onClick={handleClose}>Notification 2</MenuItem>
        <MenuItem onClick={handleClose}>Notification 3</MenuItem>
      </Menu>
    </div>
  );
};

export default Notifications;
