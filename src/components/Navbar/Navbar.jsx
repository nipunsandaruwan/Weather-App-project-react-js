import './Navbar.css'

import React from 'react'

const Navbar = ({setquery}) => {

    const cities = [
        { 
            id : 1,
            title : 'Colombo'
        },
        { 
            id : 2,
            title : 'Moratuwa'
        },
        { 
            id : 3,
            title : 'Mount Lavinia'
        },
        { 
            id : 4,
            title : 'Panadura'
        },
        { 
            id : 5,
            title : 'Rathmalana'
        }
    ]

  return (
    <nav>
        {cities.map((city) => (
            <button 
                key={city.id} 
                className='nav-button'
                onClick={()=>setquery({q:city.title})}
            >
                {city.title}
            </button>
        ))}
    </nav>
  )
}

export default Navbar
