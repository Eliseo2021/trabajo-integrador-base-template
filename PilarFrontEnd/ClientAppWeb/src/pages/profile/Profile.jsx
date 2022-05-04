import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import  { setTitle }  from '../../redux/actions/title/titleAction';
import avatar1 from '../../assets/images/avatars/Avatar-leo.png';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar: avatar1,
  city: 'Paris',
  country: 'FRANCIA',
  jobTitle: 'Futbolista',
  name: 'Leo Messi',
  Email: 'loeM10@gmail.com'
};


const Profile = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Perfil'));
  })

  return (
    <Card {...props} sx={{ backgroundColor:'#8e1537'}}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64
            }}
          />
          <Typography
            color="white"
            gutterBottom
            variant="h5"
          >
            {user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            color="white"
            variant="text"
          >
            {user.Email}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="secondary"
          fullWidth
          variant="text"
        >
          Cerrar Session
        </Button>
      </CardActions>
    </Card>
  )
}

export default Profile

