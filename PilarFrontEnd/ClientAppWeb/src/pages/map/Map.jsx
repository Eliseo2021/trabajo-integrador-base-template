import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setTitle } from '../../redux/actions/title/titleAction';
import { Grid, Paper, Typography } from '@mui/material';

const Map = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Mapa Stadiums'));
  })

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 , backgroundColor: '#8e1537', color:'#fff' }}  >
          <Typography> Mapa </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Map