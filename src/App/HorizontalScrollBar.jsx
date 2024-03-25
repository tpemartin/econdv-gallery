import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

const HorizontalScrollBar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default active box index
  const boxes = Array.from({ length: 10 }, (_, i) => `Box ${i + 1}`); // Example boxes
  
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        backgroundColor: '#f0f0f0',
        padding: 1,
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
      }}
    >
      {boxes.map((box, index) => (
        <Button
          key={box}
          variant="contained"
          onClick={() => setActiveIndex(index)}
          sx={{
            outline: activeIndex === index ? '2px solid red' : '',
            minWidth: 100,
            whiteSpace: 'nowrap',
          }}
        >
          {box}
        </Button>
      ))}
    </Box>
  );
};

export default HorizontalScrollBar;
