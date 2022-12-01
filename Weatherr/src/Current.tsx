import './App.css'
import './Vypis_Current'
import VypisCurrentSky from './Vypis_Current'

export default function Current()
{
    return(
<div className='current_div'>
<label className="sky" id="sky">Currently: <VypisCurrentSky/> </label>
</div>)
}