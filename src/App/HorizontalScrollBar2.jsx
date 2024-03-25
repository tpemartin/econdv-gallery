import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

const HorizontalScrollBar2 = () => {
  // State to track the active box, default is the first box (index 0)
  const [activeIndex, setActiveIndex] = useState(0);

  // Generating a list of boxes for demonstration purposes
  const numberOfBoxes = 10;
  const boxes = Array.from({ length: numberOfBoxes }, (_, i) => `Box ${i + 1}`);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        overflowX: 'auto',
        backgroundColor: '#f0f0f0',
        padding: '8px',
        borderTop: '1px solid #ccc', // Add a border for better visual separation
        display: 'flex',
        justifyContent: 'center', // Center the buttons in the view
        gap: '16px', // Space between the buttons
      }}
    >
      {boxes.map((box, index) => (
        <Button
          key={index} // Using index as key for simplicity; consider a unique id in a real app
          variant="contained"
          onClick={() => setActiveIndex(index)} // Set the activeIndex state to this box's index
          sx={{
            border: activeIndex === index ? '5px solid red' : '', // Apply red border if box is active
            minWidth: '100px',
          }}
        >
          {box}
        </Button>
      ))}
    </Box>
  );
};

export default HorizontalScrollBar2;
