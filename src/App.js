import './App.css';
import { useState ,useEffect } from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'

import Navbar from './components/Navbar/Navbar';
import Input from './components/Input/Input';
import TimeAndLocation from './components/Time&Location/TimeAndLocation';
import TempAndDetail from './components/TempAndDetails/TempAndDetail';
import Forcast from './components/Forecast/Forcast';

import getFormattefWeatherData from './services/wheatheService';

function App() {

  const [query,setquery] = useState({q:'colombo'});
  const [units,setUnits] = useState('metric');
  const [weather,setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattefWeatherData({...query,units}).then(data =>{
        setWeather(data)
      })
    };
  
    fetchWeather();
  }, [query,units])

  

  return (
    <div className="App">
      
      <Navbar setquery={setquery} />
      <Input setquery={setquery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TempAndDetail weather={weather} />
          <Forcast title="HOURLY FORCAST" items={weather.hourly} />
          <Forcast title="DAILY FORCAST" items= {weather.daily} />
        </div>
      )}
      
      
    </div>
  );
}

export default App;
