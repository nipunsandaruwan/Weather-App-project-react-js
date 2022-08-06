import { DateTime } from "luxon";

/// www.openweathermap.org
const API_KEY = 'ab258f5e296015c39273d2bf8856b758';
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType,searchParams) => {
    const url = new URL(BASE_URL +'/'+ infoType);
    url.search = new URLSearchParams({...searchParams,appid:API_KEY});

    return fetch(url)
            .then((res)=> res.json());
};

const formatCurrentWeather = (data) => {
    const {
        coord : {lat , lon},
        main : {temp,feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        sys : {country , sunrise ,sunset},
        weather,
        wind : {speed}
    } =data ;

    const {main:details , icon} = weather[0];

    return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset
            ,details,icon,speed};
};

const formatForcastWeather = (data) => {
    let {timezone , daily , hourly} =data;

    daily = daily.slice(1,6).map(d =>{
        return {
            title : formatToLocalTime(d.dt,timezone,'ccc'),
            temp : d.temp.day,
            icon: d.weather[0].icon
        }
    });

    hourly = hourly.slice(1,6).map(h =>{
        return {
            title : formatToLocalTime(h.dt,timezone,"hh:mm a"),
            temp : h.temp,
            icon: h.weather[0].icon
        }
    });

    return {timezone ,daily, hourly};
}

const getFormattefWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather',searchParams).then(data => formatCurrentWeather(data));

    const {lat,lon} = formattedCurrentWeather;

    const formattedForcastWeather =await getWeatherData("onecall",{
        lat,
        lon,
        exclude: "current,minutely,alerts",
        units: searchParams.units
    }).then(data => formatForcastWeather(data));

    return {...formattedCurrentWeather,...formattedForcastWeather};
};

//Date and Time formating function using luxon library
const formatToLocalTime = (secs,zone,format ="cccc,dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


//icons from api function
const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;



export default getFormattefWeatherData;

export {formatToLocalTime,iconUrlFromCode};