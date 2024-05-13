import React, { useState } from 'react';
import { Rating, Button, FormControl, FormLabel, FormGroup, FormControlLabel, Typography } from '@mui/material';
import "./RatingForm.css";

function RatingForm({ selectedRating, id="test" }) {
  const [ratings, setRatings] = useState(selectedRating);

  const handleRatingChange = (name, value) => {
    setRatings({
      ...ratings,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the ratings to your backend or perform any other action
    console.log(ratings);
    console.log(event);
    console.log({
      id: event.target.id,
      rating: ratings
    })
  };

  return (
    <form onSubmit={handleSubmit} id={id}>
      <FormControl component="fieldset">
        <FormLabel component="legend">User Ratings</FormLabel>
        <FormGroup>
          <FormControlLabel
            className='form-control-label'
            labelPlacement="start"
            control={<Rating name="標示清楚度" value={ratings["標示清楚度"]} onChange={(event, value) => handleRatingChange("標示清楚度", value)} />}
            label="標示清楚度"
          />
          <FormControlLabel
            labelPlacement="start"
            control={<Rating name="圖片故事性" value={ratings["圖片故事性"]} onChange={(event, value) => handleRatingChange("圖片故事性", value)} />}
            label="圖片故事性"
          />
          <FormControlLabel
            labelPlacement="start"
            control={<Rating name="挑戰度加分" value={ratings["挑戰度加分"]} onChange={(event, value) => handleRatingChange('挑戰度加分', value)}
              max={2} />}
            label="挑戰度加分"
          />
        </FormGroup>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </FormControl>
    </form>
  );
}

//helpers

function ControlLabel({ onClick }) {
  return <Typography
    name="rating3"
    onClick={(e) => { console.log(e) }} > control label
  </Typography>;
}

export default RatingForm;
