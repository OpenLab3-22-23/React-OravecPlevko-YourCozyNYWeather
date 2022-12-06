import './SpracujData.tsx'
import './App.css'
import { ChangeEvent, useState } from 'react';
import SpracujData from './SpracujData';


export default function Teplota() {
    const [stupne, setStupne] = useState("*USING UTC TIME*");
     function urobZmenu(e: ChangeEvent<HTMLSelectElement>)
    {
       setStupne(e.target.value)
    }

    return (
        <div className="DivInput">
            <form id="form">
            <select onChange={e => urobZmenu(e)} className="inputek" id="select" >
                <option value='*USING UTC TIME*'> Select the Time... </option>
                <option  id="firstT" value="1" >čas 1</option>
                <option id="secondT" value={SpracujData()} >čas 2</option> 
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
