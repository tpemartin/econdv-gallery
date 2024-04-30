import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBarMenu from './EconDvAppBar/AppBarMenu';
import AppLogin from './EconDvAppBar/AppBarMenu/AppLogin';
import SaveSubmitButtons from './EconDvAppBar/SaveSubmitButtons';

const EconDvAppBar = ({setShowRating, weeks, week, setWeek, setContent}) => {
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
          {/* <SaveSubmitButtons /> */}
          <AppLogin setShowRating={setShowRating}/>
          <AppBarMenu weeks={weeks} week={week} setWeek={setWeek} setContent={setContent}/>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default EconDvAppBar;
