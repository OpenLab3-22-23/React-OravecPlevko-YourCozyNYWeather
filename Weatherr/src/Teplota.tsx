import './SpracujData.tsx'
import './App.css'

export default function Teplota() {
    return (
        <div className="DivInput">
            <form id="form">
            <select className="inputek">
            <option value="*USING UTC TIME*"> Select the Time... </option>
            <option  id="firstT" value="1" ></option>
            <option id="secondT" value="2" ></option>
            <option value="3" ></option>
            </select>
            <main id="app-container" className="lokacia">
                <div id="place"  >
                <p id="ow">*USING UTC TIME*</p>
                </div>
                </main>
                </form>
        </div>
    );

}
