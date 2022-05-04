import PropTypes from 'prop-types';
import { Box, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export const StadiumsDash = ({ stadium, ...rest }) => (
  <Card
    sx={{
      backgroundColor: '#8e1537',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >

    <Link to={'/Stadiums'} >
      <CardContent>
        <Box
          sx={{
            borderRadius: '4%',
            border: '1px solid #fff',
            display: 'flex',
            justifyContent: 'center',
          }}

        >
          <Box
            component="img"
            sx={{
              borderRadius: '4%',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              alignItems: 'center',
              mx: 'auto',
              mb: 1,
              mt: 1,
            }}
            alt="Stadium"
            src={stadium.imageURL}
          />
        </Box>
      </CardContent>
    </Link>
  </Card>
);

StadiumsDash.propTypes = {
  stadium: PropTypes.object.isRequired
};


