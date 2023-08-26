import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../Assest/wind.gif";
import umber from "../Assest/umberela.png";
import drop from "../Assest/drop.png";
import sun from "../Assest/sun1.png";
export default function SerachContetn() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const fullyear = date.getDate();
  const monthname = months[date.getMonth()];
  const year = date.getFullYear() % 100;

  const apiKey = "94076540f8f36808925135b445af8137";
  const city = "london";
  const [inputCity, setInputCity] = useState("Mumbai");
  const [data, setData] = useState("");

  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWetherDetails(inputCity);
  };

  return (
    <>


    
      <div className="main_contiaer">
        <div><h1>
          Right now in <input onChange={handleChangeInput} type="text" />, it's
        </h1></div>
        
        <div className="dat_cotnier">
         <div> <img src={sun} alt="" /></div>
          <div className="box1">
            <h1>{Math.round(data?.main?.temp) + "°C"}</h1>
            <p>64°C/43°C</p>
          </div>
          <div className="data_bx">
            <div className="box_11 check">
              <img src={logo} alt="" /> <p>{data?.wind?.speed}</p>
            </div>
            <div className="box_12 check">
              <img src={umber} alt="" />
              <p>{data?.visibility}</p>
            </div>
            <div className="box_13 check">
              <img src={drop} alt="" /> <p>{data?.main?.humidity}</p>
            </div>
          </div>
        </div>
        <div className="date_conatiener">
          <p>
            Today, {fullyear} {monthname} {year}
          </p>
          <h1>{data?.name}</h1>
        </div>
      </div>



      
    </>
  );
}
