import React from 'react';
import { Stack, Typography, Box } from '@mui/material';

const TopBar = ({ type }) => {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        {type === 'focus' ? (
          <Typography
            variant="h6"
            sx={{ border: 1, borderColor: '#FFFFFF', padding: '2px' }}
          >
            Focus
          </Typography>
        ) : (
          <Typography variant="h6">Focus</Typography>
        )}

        {type === 'shortbreak' ? (
          <Typography
            variant="h6"
            sx={{ border: 1, borderColor: '#FFFFFF', padding: '2px' }}
          >
            Short Break
          </Typography>
        ) : (
          <Typography variant="h6">Short Break</Typography>
        )}

        {type === 'longbreak' ? (
          <Typography
            variant="h6"
            sx={{ border: 1, borderColor: '#FFFFFF', padding: '2px' }}
          >
            Long Break
          </Typography>
        ) : (
          <Typography variant="h6">Long Break</Typography>
        )}
      </Stack>
    </Box>
  );
};

export default TopBar;
