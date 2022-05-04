import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Cog as ClockIcon } from '../icons/cog';
import { Download as DownloadIcon } from '../icons/download';
import { Link } from 'react-router-dom';

export const StadiumCard = ({ stadium, ...rest }) => (
  
      <Card
        sx={{
          backgroundColor: '#8e1537',
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
        {...rest}
      >

        <CardContent>
        <Link to={`/stadium/${stadium._id}`} >
          <Box
            sx={{
              color: '#fff',
              borderRadius: '4%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >

            <Box
              component="img"
              sx={{
                color: '#fff',
                borderRadius: '4%',
                width: '150%',
                height: '120%',
                objectFit: 'cover',
                alignItems: 'center',
                maxHeight: { xs: 233, md: 450 },
                maxWidth: { xs: 350, md: 550 },
                mx: 'auto',
              }}
              alt="Stadium"
              src={stadium.imageURL}
            />
            <Avatar
              alt="Stadium"
              src={'../assets/images/stadiums/logo/logo.jpg'}
              variant="square"
            />
          </Box>
          </Link>
          <Typography
            align="center"
            color="#fff"
            gutterBottom
            variant="h5"
          >
            {stadium.stadiumname}
          </Typography>
          <Typography
            align="center"
            color="#fff"
            variant="body1"
            noWrap={true}
          >
            {stadium.location}
          </Typography>
        </CardContent>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Box sx={{ p: 2 }}>
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
                color="#fff"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                {stadium.capacity}
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
                color="#fff"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                Descripcion:
              </Typography>
            </Grid>

          </Grid>
        </Box>
      </Card>
  );

StadiumCard.propTypes = {
  stadium: PropTypes.object.isRequired
};


