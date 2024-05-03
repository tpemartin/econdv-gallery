import React from 'react';
import { Box, Stack, Typography, Rating } from '@mui/material';
import Markdown from 'react-markdown';
import MarkdownRenderer from './TextBox/MarkdownRenderer';
import {ratingOptions} from './TextBox/rating';

const TextBox = ({ children, showRating, context, item, rating }) => {

  console.log(item)
  const rating0 = {};
  ratingOptions.forEach(e => { rating0[e.label] = null })

  // const [rating, setRating] = React.useState(workRating);

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
        {showRating ? ratingOptions.map((e, i) => <RatingBox keyValue={i} label={e.label} maxValue={e.maxValue} />) : <></>}
      </Box>
    </Stack>
  );
};




function RatingBox({ label, maxValue, keyValue }) {

  const [rate, setRate] = React.useState(null);

  const handleOnChange = (event) => {
    console.log(event)
    setRate(event.target.value);
  }

  const handleOnClick = () => {
    setRate(null);
    console.log(rate);
  }
  return (
    <Stack direction="row" spacing={0} sx={{ width: "200px", }} key={keyValue}>
      <Typography variant="legend" onClick={handleOnClick}>
        {label}
      </Typography>
      <Rating name={label} value={rate} onChange={handleOnChange} max={maxValue} />
    </Stack>
  );
}

export default TextBox;
