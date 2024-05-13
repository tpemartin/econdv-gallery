import React, { useEffect, useState } from 'react';
import { Badge, Box, Button, Stack } from '@mui/material';
import Thumbnail from './HorizontalScrollBar2/Thumbnail';
import BadgeBox from './HorizontalScrollBar2/BadgeBox';

const HorizontalScrollBar2 = ({ content, setItem, activeIndex, setActiveIndex, setCurrentRating }) => {
  // State to track the active box, default is the first box (index 0)
 
  // Generating a list of boxes for demonstration purposes
  const handleClick = (index) => {
    setItem(content[index]);
   
  }

  useEffect(() => {

    setItem(content[0]);
    setActiveIndex(0);
  }, [content, setItem]);

  return (
    
    <Stack direction="row" spacing={10}
    p={5}
    sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      overflowX: "scroll",
      width: "100vw"}}
    >
      {content.map((value, index) => (

        <BadgeBox  key={index} number = {index+1}>
          <Button
           // Using index as key for simplicity; consider a unique id in a real app
            variant="contained"
            onClick={() => {
              setActiveIndex(index)
              handleClick(index)
              console.log('setCurrentRating')
              console.log(window.rateStorage[content[index]['週次']][content[index]['id']])
              setCurrentRating(
                window.rateStorage[content[index]['週次']][content[index]['id']]
              )
            }
             } // Set the activeIndex state to this box's index
            sx={{
              border: activeIndex === index ? '5px solid red' : '', // Apply red border if box is active
              minWidth: '100px',
            }}
          >
            <Thumbnail imgSrc={value.imgSrc} />
          </Button>
        </BadgeBox>
         
      ))}
      </Stack>

  );
};

export default HorizontalScrollBar2;
