import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EconDvAppBar from './App/EconDvAppBar';
import HorizontalScrollBar2 from './App/HorizontalScrollBar2';
import GraphBox from './App/GraphCard/GraphBox';
import graph from "./App/GraphCard/graph-sample.png"
import TextBox from './App/GraphCard/TextBox';
import GraphCard from './App/GraphCard';
import { Box } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import config from './config.json';

function App() {
  const [showRating, setShowRating] = useState(false)
  const [content, setContent] = useState([])

  const githubContentUrl = config['github-content'];
  const contentUrl = config['content'];

  const githubContent = fetch(githubContentUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // filter out those values whose "name" key value contains "week", and keep the value of "name" key,
      // sort the values in ascending order
      const weeks = data.filter(item => item.name.includes('week')).map(item => item.name);
      // split string by "week" and keep the number part, if number less than 10, add 0 before it
      const weekNumbers = weeks.map(week => week.split('week')[1].padStart(2, '0'));

      console.log(weekNumbers);

    });

  console.log(githubContent);
  return (
    <>
    <GoogleOAuthProvider clientId="235254569809-cjiic7qbpqd0jcvj2vvqcqioj30csens.apps.googleusercontent.com">
      <EconDvAppBar setShowRating={setShowRating}/>
    </GoogleOAuthProvider>
      <Box sx={{ padding: 2 }}>
        <GraphCard showRating={showRating}/>
      </Box>
      
      <HorizontalScrollBar2/>
     
    </>
  )
}

export default App
