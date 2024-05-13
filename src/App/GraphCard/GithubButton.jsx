import React from 'react';
import {Button, Link} from  '@mui/material';

const GithubButton = ({ url }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Button 
      variant="contained" 
      color="inherit" 
      sx={{
        position: 'absolute',
        bottom: "5%",
        left: "25%",
      }}
      onClick={handleClick}
      disabled={!url}
    >
      {url ? <Link href={url} target="_blank" rel="noreferrer">程式連結</Link> : '無提供程式'}
    </Button>
  );
};

export default GithubButton;
