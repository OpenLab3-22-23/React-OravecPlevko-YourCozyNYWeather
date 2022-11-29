import './SpracujData.tsx'


export default function Teplota() {
    return (
        <div>
            <select className="inputek">
            <option value="*USING UTC TIME*"> Select the Time... </option>
            <option  id="firstT" value="1" ></option>
            <option id="secondT" value="2" ></option>
            <option value="3" ></option>
            </select>
            <p id="ow">*USING UTC TIME*</p>
        </div>
    )

}

