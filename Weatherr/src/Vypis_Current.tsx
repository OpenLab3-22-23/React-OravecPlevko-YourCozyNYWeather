import { useState } from 'react';
import './App.css'


export default function VypisCurrentSky(){
    const [obloha, setObloha] = useState<string>('s');
  
return(
      <p>{obloha}</p>
)}
