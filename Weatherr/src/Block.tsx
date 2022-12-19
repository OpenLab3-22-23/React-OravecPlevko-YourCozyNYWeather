import './App.css'
import Current from './Current';
import Teplota from './Teplota';

export default function Block()
{
return(
<div className="Block" id="block">
<h1 className="headher">Your Cozy New York Weather</h1>
    <Teplota/>
    <Current/>
</div>

);
}