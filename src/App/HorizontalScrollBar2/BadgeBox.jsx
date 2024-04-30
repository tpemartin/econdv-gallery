import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';

const shapeStyles = { bgcolor: 'primary.main', width: 54, height: 54 };

export default function BadgeBox({children, number}) {
  return (

      <Badge color="secondary" badgeContent={number}>
        <Box component="span" sx={shapeStyles}>
           {children}
        </Box>
      </Badge>

  );
}
