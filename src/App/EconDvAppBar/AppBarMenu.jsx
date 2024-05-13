import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import fetchContent from '../../fetchContent';
import { updateRateStorage } from '../../rating';

export default function AppBarMenu({ weeks, week, setWeek, setContent}) {

  console.log(weeks)

  return (
    <Box sx={{ minWidth: 160 }}>
      {
        weeks? <WeekSelectMenu weeks={weeks} week={week} setWeek={setWeek} setContent={setContent}
        /> : <></>
      }
    </Box>
  );
}
function WeekSelectMenu({ weeks, week, setWeek, setContent}) {
  return <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" sx={{color: "white"}}>{week?week:weeks[0]}</InputLabel>
        <MySelectComponent weeks={weeks} week={week} setWeek={setWeek} setContent={setContent}/> 
  </FormControl>
}
function MySelectComponent({ weeks, week, setWeek, setContent}) {
  
  const handleChange = (event) => {
    setWeek(event.target.value);
    // add #event.target.value to the navigator url
    window.location.hash = `#${event.target.value}`;


    fetchContent(event.target.value, window.contentEntry)
      .then(content => {
        setContent(content)
        updateRateStorage(content);
      });
  };

  return (
    <Select value={week} onChange={handleChange}
      sx={{ height: 40, color: "white" }}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label={week?week:weeks[0]}
    >
      {
        // map the weeks array to MenuItem components  
        weeks ? weeks.map((week) => {
          return <MenuItem key={week} value={week}>{week}</MenuItem>
        }) : <></>
      }

    </Select>
  );
}
