import React from 'react';
import { Box, Typography } from '@mui/material';

function Circle({ number }) {
  return (
    <Box
      sx={{
        zIndex: 2,
        position: 'absolute',
        top: '0%',
        right: '50%',
        width: 50,
        height: 50,
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
      <Typography 
        sx={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
        
        }}
      >{number}</Typography>
    </Box>
  );
}

export default Circle;
