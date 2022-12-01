import { useState } from 'react';
import './App.css'


export default function VypisCurrentSky(){
    const [obloha, setObloha] = useState<string>('');
  
return(
      <p>{obloha}</p>
)}
