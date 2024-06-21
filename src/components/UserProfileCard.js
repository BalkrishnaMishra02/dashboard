// src/components/UserProfileCard.js
import React from 'react';
import { Card, CardContent, Avatar, Typography } from '@mui/material';

const UserProfileCard = () => {
  return (
    <Card style={{ maxWidth: 300, margin: '0 auto', textAlign: 'center' }}>
      <CardContent>
        <Avatar alt="User Name" src="/static/images/avatar/1.jpg" style={{ margin: '0 auto', width: 60, height: 60 }} />
        <Typography variant="h6">Balkrishna Mishra</Typography>
        <Typography variant="body2" color="textSecondary">xyz@example.com</Typography>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
