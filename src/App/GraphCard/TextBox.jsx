import React from 'react';
import { Box, Stack, Typography, Rating } from '@mui/material';
import Markdown from 'react-markdown';
import MarkdownRenderer from './TextBox/MarkdownRenderer';
import { ratingOptions, optionMaxValues } from './TextBox/rating';
import RatingForm from './TextBox/RatingForm';

const TextBox = ({ children, showRating, context, item, rating, height }) => {
  console.log(rating)
  const [currentRating, setCurrentRating] = React.useState(rating);
  console.log('textbox currentRating');
  console.log(currentRating);
 
  const textHeight = height - 30;
 
  const ratingKeys = Object.keys(rating);
  // const [rating, setRating] = React.useState(workRating);
  // console.log('TextBox currentRating')
  // console.log(currentRating)

  // const rateBoxes = showRating ? <RateBoxes
  //   setCurrentRating={setCurrentRating}
  //   ratingKeys={ratingKeys} optionMaxValues={optionMaxValues} currentRating={currentRating}
  // /> : <> </>;

  return (
    
      <Box
        sx={
          {
            height: height-30,
            overflowY: 'scroll',
          }
        }
        // sx={{
        //   height: {
        //     sm: "20vh",
        //     md: "40vh",
        //   },
        //   width: '100%',
        //   overflow: 'auto',
        //   boxSizing: 'border-box',
        // }}
      >
        <MarkdownRenderer markdownText={context} height={textHeight} />
      </Box>
     
  );
};

function RateBoxes({ ratingKeys, optionMaxValues, setCurrentRating, currentRating }) {

  return <Box>
    {
      ratingKeys.map((k, i) => {
        return <RatingBox label={k} key={i} maxValue={+optionMaxValues[k]} keyValue={i} init_value={+currentRating[k]}
          setCurrentRating={setCurrentRating} />
      })
    }
  </Box>
}




function RatingBox({ label, maxValue, keyValue, init_value, setCurrentRating }) {

  const [rate, setRate] = React.useState(+init_value);

  console.log('RatingBox rate')
  console.log(rate)

  const handleOnChange = (event) => {
    setRate(event.target.value);
    window.rateStorage[window.currentWeek][window.currentId][event.target.name] = event.target.value;
    setCurrentRating(window.rateStorage[window.currentWeek][window.currentId]);
  }

  const handleOnClick = (event) => {
    window.rateStorage[window.currentWeek][window.currentId][event.target.innerHTML] = 0;
    setCurrentRating(window.rateStorage[window.currentWeek][window.currentId]);
    setRate(null);
    // console.log(rate);
  }
  return (
    <Stack direction="row" spacing={0} sx={{ width: "200px", }} key={keyValue}>
      <Typography variant="legend" onClick={handleOnClick}>
        {label}
      </Typography>
      <Rating name={label} value={rate? +rate:0} onChange={handleOnChange} max={+maxValue} />
    </Stack>
  );
}

export default TextBox;
