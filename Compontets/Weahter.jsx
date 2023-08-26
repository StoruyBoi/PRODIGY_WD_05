import axios from 'axios';
import { useEffect, useState } from "react";
export default function Weahter() {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const date=new Date();
const fullyear=date.getDate()
const monthname=months[date.getMonth()]
const year=date.getFullYear() % 100;


const apiKey = "94076540f8f36808925135b445af8137    "
const [inputCity, setInputCity] = useState("")
const [data, setData] = useState({})


const getWetherDetails = (cityName) => {
  if (!cityName) return
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
  axios.get(apiURL).then((res) => {
    console.log("response", res.data)
    setData(res.data)
  }).catch((err) => {
    console.log("err", err)
  })
}

const handleChangeInput = (e) => {
  console.log("value", e.target.value)
  setInputCity(e.target.value)
}

const handleSearch = () => {
  getWetherDetails(inputCity)
}




  return (
<>

 

<div className="wether_cont">
    <div className="continaer_1">
        <p>Today, {fullyear} {monthname} {year}</p>
        <p>   {data?.name}  </p>
        <div className="cintiaer_2">
            <p>Mostly {data?.weather?.id}</p>
            <h1>{((data?.main?.temp) - 273.15).toFixed(2)}°C</h1>

        </div>
        <div className="continiaer_3">
            <h1>{data?.wind?.speed} |</h1>
            <h1>{data?.main?.humidity} |</h1>
            <h1>{data?.visibility}</h1>
        </div>
        <input value={inputCity} onChange={handleChangeInput} type="text" name="" id="" />
        <button onClick={handleSearch}>submit</button>
    </div>
</div>




</>
  )
}
