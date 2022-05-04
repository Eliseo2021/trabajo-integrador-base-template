import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Grid,Box} from '@mui/material';
import { StadiumsDash } from '../../components/StadiumsDash';

import { setTitle } from '../../redux/actions/title/titleAction';
import { allStadiums } from '../../redux/actions/stadiums/stadiumsActions';
import { allUsers } from '../../redux/actions/users/usersActions';


const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Guia Stadiums - Mundial Qatar 2022'));
  })

  const stadiums = useSelector((state) => state.stadiumsReducer.stadiums);
  const users = useSelector((state) => state.usersReducer.users);
  console.log(stadiums);
  console.log(users);

  useEffect(() => {
    dispatch(allStadiums());
  }, [])
  
  useEffect(() => {
    dispatch(allUsers());
  }, [])

  return (
    <>
      <Box sx={{ pt: 1 }}>
        <Grid
          container
        >
          {stadiums.map((stadium) => (
            <Grid
              item
              key={stadium._id}
              lg={3}
              md={4}
              xs={12}
            >
              <StadiumsDash stadium={stadium} />
            </Grid>
          ))}
        </Grid>
      </Box>

    </>
  );
};

export default Dashboard;
