import './SpracujData.tsx'
import './App.css'
import { ChangeEvent, useState } from 'react';
import SpracujData from './SpracujData';



export default function Teplota() {
    const [cas, setCas] = useState("'We look (will also look) the same but we're not...'");
    const [stupne, setStupne] = useState("*USING UTC TIME*");
    async function Api(num:number)
    {
    
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '56ba64173fmshc7e71874c046f26p12d62ajsn8245ba17a524',
                'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            }
        };
        
        fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
        .then(response => response.json())
///.then(response => console.log(response))
        //.then(response => setCas(response.data[num].timestamp_utc))
        .then(response => setStupne(response.data[num].temp+" °C"))
        .catch(err => console.error(err));
    }
     
    async function urobZmenu(e: ChangeEvent<HTMLSelectElement>)
    {
       await Api(e.target.value as unknown as number)       
    }

    return (
        <div className="DivInput">
            <form id="form">
            <select onChange={e => urobZmenu(e)} className="inputek" id="select" >
                <option disabled selected value="nic"> Select the Time... </option>
                <option  id="firstT" value="1" >{cas}</option>
                <option id="secondT" value="2" >{cas}</option> 
            </select>
            
            <main id="app-container" className="lokacia">
                <div id="place"  >
                <p id="ow">{stupne}</p>
                </div>
                </main>
                </form>
        </div>
    );
}
