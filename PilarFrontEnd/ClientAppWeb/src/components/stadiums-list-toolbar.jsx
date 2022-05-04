import {
  Box,
  Button,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography
} from '@mui/material';
import { Search as SearchIcon } from '../icons/search';

export const StadiumListToolbar = (props) => (
  <Box {...props} >
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Stadiums
      </Typography>
      <Box sx={{ m: 1 }}>

        <Button
          color="primary"
          variant="contained"
        >
          Add stadiums
        </Button>
      </Box>

      <Box sx={{ maxWidth: 500 }}>
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon
                  fontSize="small"
                  color="action"
                >
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            )
          }}
          placeholder="Search stadium"
          variant="outlined"
        />
      </Box>

    </Box>
  </Box>
);
