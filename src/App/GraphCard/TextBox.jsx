import React from 'react';
import { Box, Stack, Typography, Rating } from '@mui/material';
import Markdown from 'react-markdown';
import MarkdownRenderer from './TextBox/MarkdownRenderer';

const TextBox = ({ children,showRating, context}) => {

  
  return (
      <Stack direction="column" spacing={2}>
        <Box
          sx={{
            height: {
              sm: "20vh",
              md: "40vh",
            },
            width: '100%',
            overflow: 'auto',
            boxSizing: 'border-box',
          }}
        >
          <MarkdownRenderer markdownText={context} />
        </Box>
        <Box >
          {showRating? <RatingBox/>:null}
        </Box>
      </Stack>
  );
};

function RatingBox() {
  const [rate, setRate] = React.useState(null);

  const handleOnChange = (event) => {
    setRate(event.target.value);
  }

  return (
    <Stack direction="row" spacing={0} sx={{ width: "200px" }}>
      <Typography variant="body" sx={{ flexGrow: 1, }}>
        評分
      </Typography>
      <Rating name="no-value" value={rate} onChange={handleOnChange} />
    </Stack>
  );
}

export default TextBox;
