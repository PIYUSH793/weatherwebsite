import React, { useEffect, useState } from 'react';
import "./css/style.css";


const Weatherapp= () =>{

const [city,setcity] = useState(null);
const[search,setsearch] = useState("pune");


useEffect(()=>{
  const fetchApi = async () =>{
  
    

    const url = `http://api.weatherapi.com/v1/forecast.json?key=b2180a8f20fe44ef815123902211106&q=${search}&days=1&aqi=no&alerts=no`
    const response = await fetch(url)
    const resJson = await response.json();

     //console.log(resJson);
   
     
     setcity(resJson)
     
     };


   fetchApi();
},[search])


 return(
   <>
     <div className="box">

       <div className="inputData">
         <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event)=>{ setsearch(event.target.value) }}
         />

       </div>
     
     {!city ? (
        <p className="errorMsg">No Data Found</p>
     ) :

  (

   <div>

    <div className="info">

       <h2 className="location">
       <i>🌤️</i>{search}
       </h2>
       

       {!city.current ? (
        <p className="errorMsg">No Data Found</p>
     ) :

     (

       <h1 className="temp">
       🌦️{city.current.temp_c}°C
       </h1>

     )}

     {!city.forecast ? (
        <p className="errorMsg"></p>
     ) :

  (

       <h3 className="tempmin_max">
       Min : {city.forecast.forecastday[0].day.mintemp_c}°C | Max : {city.forecast.forecastday[0].day.maxtemp_c}°C
       </h3>

       

  )}

  <br/>

  {!city.forecast ? (
        <p className="errorMsg"></p>
     ) :
     (
          
          <h3>
          Date & Time 🕒 {city.location.localtime}
          <br></br>
          Wind Speed 🎐 {city.forecast.forecastday[0].hour[0].wind_kph} km/h
          <br></br>
          Wind Direction 🧭 {city.forecast.forecastday[0].hour[0].wind_dir} 
          <br></br>
          Weather Condition ☁️ {city.forecast.forecastday[0].hour[0].condition.text}
          <br></br>
          Humidity 🌤️ {city.forecast.forecastday[0].hour[0].humidity} %
          <br></br>
          Sunrise 🌅 {city.forecast.forecastday[0].astro.sunrise}
          <br></br>
          Sunset 🌇 {city.forecast.forecastday[0].astro.sunset}
          <br></br>
          
          
          </h3>

          //Hourly Temperature 🌦️ {city.forecast.forecastday[0].hour[0].temp_c}°C

     )}

     
    </div>
  
    <div className="wave -one"></div>

    <div className="wave -two"></div>

    <div className="wave -three"></div>

   </div>
    )}

    
       
  
    </div>     
  
  

   </>

  );
}

export default Weatherapp;