import './Input.css'
import React,{useState} from 'react'

import { UilSearch } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'

const Input = ({setquery,units,setUnits}) => {

    const [city,setCity] = useState('');

    const handleSearchClick = () => {
        if (city !== ''){
            setquery({q:city})
        }
    }

    const handleUnitsChange = (e) => {
        const selectedUnite = e.currentTarget.name;

        if (units !== selectedUnite) setUnits(selectedUnite)
    }

  return (
    <div className='searchbar'>
        <div className="search">
            <input 
                type="text"
                placeholder='search....'
                className='search-input' 
                value={city}
                onChange={(e)=>setCity(e.currentTarget.value)}
            />
            <div className='search-icon'>
                <UilSearch 
                    size={25} 
                    className="search-icon"
                    onClick={handleSearchClick}
                />
            </div>
            {/* <div className="search-icon">
                <UilMapMarker size={25} className="search-icon"/>
            </div> */}
            
        </div>

        <div className="cORf">
            <button name='metric' className='buttoncof' onClick={handleUnitsChange}>°C</button>
            <button name='imperial' className='buttoncof'onClick={handleUnitsChange}>F</button>
        </div>
    </div>
  )
}

export default Input
