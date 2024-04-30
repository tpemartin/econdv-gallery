import React from 'react';
import { Box, Typography } from '@mui/material';

function Circle({ number }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '14%',
        right: '50%',
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
      }}
    >
      <Typography>{number}</Typography>
    </Box>
  );
}

export default Circle;
