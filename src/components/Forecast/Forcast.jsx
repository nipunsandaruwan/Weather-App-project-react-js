import './Forcast.css'

import React from 'react'

import { UilCloud } from '@iconscout/react-unicons'
import { iconUrlFromCode } from '../../services/wheatheService'

const Forcast = ({title,items}) => {
    console.log(items)
  return (
    <div className='forcast'>
      
      <div className="option">
        <h2>{title}</h2>
        <div className="hr"></div>
        <div className="details">
            {items.map((item)=> (
                <div key={item.title} className="detail">
                    <p>{item.title}</p>
                    <img src={iconUrlFromCode(item.icon)} width="50px" height="50px"/>
                    <p>{item.temp.toFixed()}°</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Forcast;
