import { useState } from 'react'
import './App.css'
import './Teplota.tsx'
import Block from './Block'
import Teplota from './teplota'
import Current from './Current'


function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='App'>
      <Current/>
      <Block/>
    </div>
      );
}

export default App
