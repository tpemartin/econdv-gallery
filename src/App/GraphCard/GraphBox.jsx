import React, { useState } from 'react';
import { Dialog, DialogContent, IconButton, Backdrop } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {Image} from 'mui-image';

const GraphBox = ({ imageUrl }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{height: "100%"}}>
        <Image src={imageUrl} fit="contain"  onClick={handleClick}/>
        {/* <img src={imageUrl?imageUrl:graph} alt="graph" style={{ width: '100%', maxWidth: '100%', cursor: 'pointer' }} /> */}
     </div>
      
      <Dialog  open={open} onClose={handleClose}>
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
