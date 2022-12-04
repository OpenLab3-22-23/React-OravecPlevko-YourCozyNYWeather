import './SpracujData.tsx'
import './App.css'
import { useState } from 'react';

export default function Teplota() {
    let [stupne, setStupne] = useState<string>('*USING UTC TIME*');


    /*let select1 = document.querySelector("#select");
    let optiona = document.querySelector("#firstT");
    if(select1= )
    {

    }
    select1.addEventListener('change',(stupne) => 
        {
        let prepis = document.querySelector("#ow");
        prepis.textContent = ` ${stupne}  °C`;});*/
   

    /*if(document.querySelector("#firstT") )
    {
        stupne = "15"
    }
    else(document.querySelector("#secondT"))
    {
        stupne = "13"
    }*/



    return (
        <div className="DivInput">
            <form id="form">
                <script>
                    
                </script>
            <select className="inputek" id="select">
            <option value="*USING UTC TIME*"> Select the Time... </option>
            <option  id="firstT" value="1" ></option>
            <option id="secondT" value="2" ></option>
            <option value="3" ></option>
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
