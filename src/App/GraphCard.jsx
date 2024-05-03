import React from 'react';
import { Paper, Grid, Box } from '@mui/material';
import GraphBox from './GraphCard/GraphBox';
import TextBox from './GraphCard/TextBox';
import graph from "./GraphCard/graph-sample.png"
import Circle from './GraphCard/Circle';

const GraphCard = ({id, imageUrl=graph, showRating, item, number, rating}) => {

  console.log(rating)

  return (
    <Paper id={id} sx={{ padding: 2, margin: 2, height: "600px", maxHeight: "80vh" }} >
      <Circle number={number} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>

            <GraphBox imageUrl={imageUrl}/>

        </Grid>
        <Grid item xs={12} md={5}>
          <TextBox showRating={showRating} context={item.說明文字} item={item} rating={rating}>
          </TextBox>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GraphCard;
