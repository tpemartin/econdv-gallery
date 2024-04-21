import React from 'react';
import { Paper, Grid } from '@mui/material';
import GraphBox from './GraphCard/GraphBox';
import TextBox from './GraphCard/TextBox';
import graph from "./GraphCard/graph-sample.png"
const GraphCard = ({imageUrl=graph}) => {
  return (
    <Paper sx={{ padding: 2, margin: 2, height: "600px", maxHeight: "80vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <GraphBox imageUrl={imageUrl} />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextBox>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis est nec turpis posuere, at varius nunc volutpat. Sed tincidunt congue leo, et hendrerit turpis tincidunt vel.
            </p>
            <p>
              Integer nec turpis vitae justo lacinia sollicitudin. Fusce auctor aliquam sem vehicula varius. Aliquam erat volutpat.
            </p>
            <p>
              Nunc auctor dui in fermentum dictum. Donec lobortis ante sit amet tellus bibendum, nec condimentum lorem scelerisque.
            </p>
          </TextBox>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GraphCard;
