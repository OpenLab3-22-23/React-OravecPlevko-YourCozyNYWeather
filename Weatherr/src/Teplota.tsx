import './SpracujData.tsx'
import './App.css'
import { ChangeEvent, useState } from 'react';
import SpracujData from './SpracujData';



export default function Teplota() {   
    const [cas, setCas] = useState("TEMPERATURE IN LOCAL TIME");
    const [cas2, setCas2] = useState("TEMPERATURE IN UTC");
    const [stupne, setStupne] = useState("Temperature");
    async function Api(num:number)
    {
    
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7151a85878mshb32875c0cba7e82p1de453jsn143e8109a919',
                'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            }
        };
        
        fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
        .then(response => response.json())
        .then(response => {
            setCas(response.data[num].timestamp_local)
            setStupne(response.data[num].temp+" °C")
            setCas2(response.data[num].timestamp_utc)})
            
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
                <option  id="firstT" value="0" >{cas}</option>
                <option id="secondT" value="0" >{cas2}</option> 
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
