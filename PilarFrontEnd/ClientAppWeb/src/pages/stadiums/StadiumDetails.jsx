import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Box, Card, Avatar, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Cog as ClockIcon } from '../../icons/cog.js';
import { Download as DownloadIcon } from '../../icons/download';
import { useParams } from "react-router-dom";

import { setTitle } from '../../redux/actions/title/titleAction';
import { byStadium } from '../../redux/actions/stadiums/stadiumsActions';

const StadiumDetails = () => {
  const { id } = useParams();

    const [stadiumDetail, setStadiumDetail] = useState(null);
    console.log(stadiumDetail);

    return (

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, backgroundColor: '#8e1537' }} >

            <CardContent>
              <Box
                sx={{
                  borderRadius: '4%',
                  display: 'flex',
                  justifyContent: 'center',
                  pb: 3
                }}
              >

                <Box
                  component="img"
                  sx={{
                    borderRadius: '4%',
                    objectFit: 'cover',
                    alignItems: 'center',
                    height: 250,
                    width: 350,
                    maxHeight: { xs: 233, md: 450 },
                    maxWidth: { xs: 350, md: 550 },
                    mx: 'auto',
                    mb: 3,
                    mt: 3,
                  }}
                  alt="Stadium"
                  src={stadiumDetail.imageURL}
                />
                <Avatar
                  alt="Stadium"
                  src={'../assets/images/stadiums/logo/logo.jpg'}
                  variant="square"
                />
              </Box>
              <Typography
                align="center"
                color="textPrimary"
                gutterBottom
                variant="h5"
              >
                {stadiumDetail.stadiumname}
              </Typography>
              <Typography
                align="center"
                color="textPrimary"
                variant="body1"
                noWrap={true}
              >
                {stadiumDetail.location}
              </Typography>
            </CardContent>
            <Card sx={{ flexGrow: 1 }} />
            <Divider />
            <Card sx={{ p: 2 }}>
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'space-between' }}
              >
                <Grid
                  item
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <DownloadIcon color="action" />
                  <Typography
                    color="textSecondary"
                    display="inline"
                    sx={{ pl: 1 }}
                    variant="body2"
                  >
                    {stadiumDetail.capacity}
                    {' '}
                    Capacidad
                  </Typography>
                </Grid>

                <Grid
                  item
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <ClockIcon color="action" />

                  <Typography
                    color="textSecondary"
                    display="inline"
                    sx={{ pl: 1 }}
                    variant="body2"
                  >
                    {stadiumDetail.description}
                  </Typography>

                </Grid>
              </Grid>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    )
  }

export default StadiumDetails


