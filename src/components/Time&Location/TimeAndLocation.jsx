import './TimeAndLocation.css'

import React from 'react'
import { formatToLocalTime } from '../../services/wheatheService'

const TimeAndLocation = ({weather:{dt,timezone,name,country} }) => {
  return (
    <div className='timeandlocation'>
        <div className="time">
           <p>{formatToLocalTime(dt,timezone)}</p> 
        </div>

        <div className="location">
           <p>{name} , {country}</p> 
        </div>
    </div>
  ) 
}

export default TimeAndLocation
