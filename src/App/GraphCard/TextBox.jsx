import React from 'react';
import { Box } from '@mui/material';

const TextBox = ({ children }) => {
  return (
    <Box
      sx={{
        height: { xs: '40vh', md: '100%' }, // 40% of viewport height for small screens
        width: '100%',
        overflow: 'auto',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </Box>
  );
};

export default TextBox;
