import { useState } from 'react'
import './App.css'
import Block from './Block'
import Teplota from './Teplota'
import Current from './Current'
import Canvas from './Canvas'
import './gulky'



function App() {
  //const [count, setCount] = useState(0)

  return (
     <div className='App'>
      <div>
      <Block/>      
      <Teplota/>
      <Current/>
      </div>
      <Canvas/>
    </div>
    
      );
      
}

export default App