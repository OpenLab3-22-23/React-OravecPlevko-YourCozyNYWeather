import { useState } from 'react';
import './App.css'


export default function VypisCurrentSky(){
    const [obloha, setObloha] = useState();
    //async function ApiObloha() 
    //{
        
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '56ba64173fmshc7e71874c046f26p12d62ajsn8245ba17a524',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };
    
    fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
        .then(response => response.json())
        .then(response => setObloha(response.data[0].weather.description))
        .catch(err => console.error(err));
//}



return(
      <p>{obloha}</p>
)}
