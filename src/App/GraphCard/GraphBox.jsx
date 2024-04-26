import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, IconButton, Backdrop, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Image } from 'mui-image';
import { Height } from '@mui/icons-material';

const GraphBox = ({ imageUrl, setGraphHeight }) => {
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{
        height: {
          sm: "30vh",
          md: "40vh",
        }
      }}>
        <Image src={imageUrl} fit="contain" onClick={handleClick} />
        {/* <img src={imageUrl?imageUrl:graph} alt="graph" style={{ width: '100%', maxWidth: '100%', cursor: 'pointer' }} /> */}
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Image src={imageUrl} fit="contain" />
          {/* <img src={imageUrl} alt="graph"  /> */}
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogContent>
      </Dialog>

    </>
  );
};

export default GraphBox;
