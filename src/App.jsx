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
import create_rateStorageTemplate from './rating';

window.contentEntry = config['content'];

function App() {
  const [showRating, setShowRating] = useState(false)
  const [week, setWeek] = useState(null)
  const [weeks, setWeeks] = useState(null)
  const [content, setContent] = useState(null)
  const [rating, setRating] = useState(null)

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

        console.log("current hash");
        const hashWithoutHash = window.location.hash.replace("#", "");
        console.log(hashWithoutHash);

        const currentWeek = hashWithoutHash? hashWithoutHash: weeksList[0];
        setWeek(currentWeek)
        
        return fetchContent(currentWeek, contentEntry);

      }).then(
        (data) => {
          console.log(data);
          setContent(data);
          const idList = data.map(item => item.id);

          const rateStorage = create_rateStorageTemplate(data[0]['週次'], idList)
          window.rateStorage = rateStorage;
          console.log(rateStorage);
          localStorage.setItem('rateStorage', JSON.stringify(rateStorage));
        }
      );
  }, []);




  return (
    <>
      <GoogleOAuthProvider clientId="235254569809-cjiic7qbpqd0jcvj2vvqcqioj30csens.apps.googleusercontent.com">
        <EconDvAppBar setShowRating={setShowRating} weeks={weeks} week={week} setWeek={setWeek}
          setContent={setContent}
        />
      </GoogleOAuthProvider>
      {
        content ? <GraphContent showRating={showRating} content={content} /> : <>Loading...</>
      }
    </>
  )
}

function GraphContent({ showRating, content }) {
  const [item, setItem] = useState(content[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  // const [currentId, setCurrentId] = useState(item['id']);
  const currentId = item['id']; //item? item['id']: content[0]['id'];
  const currentWeek = item['週次']; // item? item['週次']: content[0]['週次'];

  console.log(currentId)
  console.log(currentWeek)
  const rating = window.rateStorage[currentWeek][currentId];
  const [currentRating, setCurrentRating] = useState(rating);

  window.currentId = currentId;
  console.log('currentId');
  console.log(window.currentId);
  console.log('rating');
  console.log(rating);
  console.log('currentRating');
  console.log(currentRating);
  console.log('item');
  console.log(item);

  console.log(activeIndex)

  const graphCard = item ?
    <GraphCard id={item['id']} imageUrl={item.imgSrc} showRating={showRating} item={item}
      rating={currentRating}
      number={activeIndex + 1} 
      programUrl = {item['程式連結']}
      /> :
    <GraphCard id={content[0]['id']} imageUrl={content[0].imgSrc} showRating={showRating} item={content[0]}
      number={1} rating={currentRating} />;

  return content ? <>
    <Box sx={{ padding: 2 }}>
      {graphCard}
    </Box>
    <HorizontalScrollBar2 content={content} setItem={setItem}
      setActiveIndex={setActiveIndex} activeIndex={activeIndex} setCurrentRating={setCurrentRating}
    />
  </> : <></>
}


export default App
