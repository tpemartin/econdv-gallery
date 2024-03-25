import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EconDvAppBar from './App/EconDvAppBar';
import HorizontalScrollBar2 from './App/HorizontalScrollBar2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EconDvAppBar/>
      <HorizontalScrollBar2/>
     
    </>
  )
}

export default App
