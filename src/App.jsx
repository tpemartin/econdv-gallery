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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EconDvAppBar/>
      <Box sx={{ padding: 2 }}>
      <GraphCard/>
      </Box>
      
      <HorizontalScrollBar2/>
     
    </>
  )
}

export default App
