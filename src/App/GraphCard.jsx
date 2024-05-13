import React from 'react';
import { Paper, Grid, Box, Stack } from '@mui/material';
import GraphBox from './GraphCard/GraphBox';
import TextBox from './GraphCard/TextBox';
import graph from "./GraphCard/graph-sample.png"
import Circle from './GraphCard/Circle';
import RatingForm from './GraphCard/TextBox/RatingForm';
import GithubButton from './GraphCard/GithubButton';

const GraphCard = ({ id, imageUrl = graph, showRating, item, number, rating, programUrl }) => {

  const [height, setHeight] = React.useState("100%")

  console.log('graphcard rating')
  console.log(rating)

  const selectedRating = {
    "標示清楚度": 0,
    "圖片故事性": 3,
    "挑戰度加分": 0
  }

  // get the ref of Paper component
  const paperRef = React.useRef(null);

  // get the Paper height and width
  React.useEffect(() => {
    console.log(paperRef.current.clientHeight);
    console.log(paperRef.current.clientWidth);
    setHeight(paperRef.current.clientHeight);
  }, [paperRef.current]);

  return (
    <Paper
      ref={paperRef}
      id={id} sx={{
        position: "relative",
        padding: 2, margin: 2,
        height: {
          md: "540px",
          sm: "100%",
        }
        // maxHeight: "80vh",
        //  overflowY: 'hidden'
      }} >
      <Circle number={number} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>

          <GraphBox imageUrl={imageUrl} />
          <GithubButton url={programUrl}/>

        </Grid>
        <Grid item xs={12} md={5}>
          <Stack direction="column" spacing={2}
            mt={2} pb={2}
            sx={{
              height: height - 10,
              // overflowY: 'scroll',
            }}>
            <TextBox showRating={showRating} context={item.說明文字}
              item={item} rating={rating} height={height - 20} />
            {
              showRating ? <RatingForm selectedRating={rating} id={id} /> : null
            }
          </Stack>

        </Grid>
      </Grid>
    </Paper>
  );
};

export default GraphCard;
