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
function App() {
  const [showRating, setShowRating] = useState(false)

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
