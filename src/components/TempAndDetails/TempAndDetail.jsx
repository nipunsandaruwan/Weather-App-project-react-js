import './TempAndDetails.css'

import React from 'react'

import { UilSun } from '@iconscout/react-unicons'
import { UilTemperature } from '@iconscout/react-unicons'
import { UilTear } from '@iconscout/react-unicons'
import { UilWind } from '@iconscout/react-unicons'
import { UilSunset } from '@iconscout/react-unicons'
import { UilArrowUp } from '@iconscout/react-unicons'
import { UilArrowDown } from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../../services/wheatheService'

const TempAndDetail = ({weather : {details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone}}) => {
  return (
    <div className='tempanddetails'>
        <div className="status">
            <p>{details}</p>
        </div>

        <div className='box1'>
            <img src={iconUrlFromCode(icon)} alt="" />

            <p className='temp'>{temp.toFixed()}°</p>

            <div className="otherdetails">
                <div className="detail">
                    <UilTemperature/>
                    <p>Real fell : {feels_like.toFixed()}°</p>
                </div>
                <div className="detail">
                    <UilTear/>
                    <p>Humidity : {humidity}%</p>
                </div>
                <div className="detail">
                    <UilWind/>
                    <p>Wind : {speed.toFixed()} km/h</p>
                </div>
            </div>
        </div>

        <div className='aboutSunandtemp'>
            <div className="detail">
                <UilSun />
                <p>Rise : {formatToLocalTime(sunrise,timezone,"hh:mm a")}</p>
            </div>

            <div className="detail">
                <UilSunset />
                <p>Set : {formatToLocalTime(sunset,timezone,"hh:mm a")} PM</p>
            </div>

            <div className="detail">
                <UilArrowUp />
                <p>High : {temp_max.toFixed()}°</p>
            </div>

            <div className="detail">
                <UilArrowDown />
                <p>Low : {temp_min.toFixed()}°</p>
            </div>
        </div>
    </div>
  )
}

export default TempAndDetail
