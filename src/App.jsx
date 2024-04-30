import { useState, useEffect } from 'react'
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
import fetchContent from './fetchContent';

window.contentEntry = config['content'];

function App() {
  const [showRating, setShowRating] = useState(false)
  const [week, setWeek] = useState(null)
  const [weeks, setWeeks] = useState(null)
  const [content, setContent] = useState(null)
  const githubContentUrl = config['github-content'];
  const contentEntry = window.contentEntry;

  console.log(week)
  useEffect(() => {
    fetch(githubContentUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // filter out those values whose "name" key value contains "week", and keep the value of "name" key,
        // sort the values in ascending order
        const weeksList = data.filter(item => item.name.includes('week')).map(item => item.name).sort();
        // split string by "week" and keep the number part, if number less than 10, add 0 before it
        setWeeks(weeksList);
        fetchContent(weeksList[0], contentEntry, setContent);

      });
  }, []);




  return (
    <>
      <GoogleOAuthProvider clientId="235254569809-cjiic7qbpqd0jcvj2vvqcqioj30csens.apps.googleusercontent.com">
        <EconDvAppBar setShowRating={setShowRating} weeks={weeks} week={week} setWeek={setWeek}
          setContent={setContent}
        />
      </GoogleOAuthProvider>
      {
       content?<GraphContent showRating={showRating} content={content} />:<>Loading...</>
      }
    </>
  )
}

function GraphContent({ showRating, content }) {
  const [item, setItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  console.log(item)
  console.log(activeIndex)

  const graphCard = item ? 
    <GraphCard imageUrl={item.imgSrc} showRating={showRating} item={item} 
    number = {activeIndex+1}/>:
    <GraphCard imageUrl={content[0].imgSrc} showRating={showRating} item={content[0]} 
    number = {1} />;

  return content ? <>
    <Box sx={{ padding: 2 }}>
      {graphCard}
    </Box>
    <HorizontalScrollBar2 content={content} setItem={setItem}
    setActiveIndex={setActiveIndex} activeIndex={activeIndex}
    />
  </> : <></>
}


export default App
