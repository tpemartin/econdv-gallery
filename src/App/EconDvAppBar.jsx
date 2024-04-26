import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBarMenu from './EconDvAppBar/AppBarMenu';
import AppLogin from './EconDvAppBar/AppLogin/AppLogin';

const EconDvAppBar = ({setShowRating}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EconDV Gallery
        </Typography>


        <Stack direction="row" spacing={1}>
          <AppLogin setShowRating={setShowRating}/>
          <AppBarMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default EconDvAppBar;
