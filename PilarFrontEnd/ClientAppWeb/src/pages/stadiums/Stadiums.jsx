import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Grid, Paper, Box, Container, Pagination } from '@mui/material';
import { StadiumListToolbar } from '../../components/stadiums-list-toolbar';
import { StadiumCard } from '../../components/stadiums-card';

import  { setTitle }  from '../../redux/actions/title/titleAction';
import { allStadiums } from '../../redux/actions/stadiums/stadiumsActions';

const Stadiums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Stadiums Qatar 2022'));
  })

  useEffect(() => {
    dispatch(allStadiums());
  }, [])
  
  const stadiums = useSelector((state) => state.stadiumsReducer.stadiums);

  return (
    <Grid container spacing={3} >
      <Grid item xs={12}>
      <Paper sx={{p: 2, backgroundColor: '#8e1537', color:'#fff' }} >
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <StadiumListToolbar  />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {stadiums.map((stadium) => (
              <Grid
                item
                key={stadium._id}
                lg={4}
                md={6}
                xs={12}
              >
                <StadiumCard stadium={stadium} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Stadiums
