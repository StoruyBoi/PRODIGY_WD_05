import axios from "axios";
import React, { useEffect, useState } from "react";
import wind from "../Assest/winnd.png";
import umber from "../Assest/umberela.png";
import drop from "../Assest/drop.png";
export default function Temp() {
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
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${search}` +
        "&appid=" +
        apiKey;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="main_contiaer">
        <div>
          <h1>
            Right now in{" "}
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
            />
            , it's
          </h1>
        </div>

        {!city ? (
          <p>No data</p>
        ) : (
          <div>
            <div className="dat_cotnier">
              <div className="box1">
                <h1>{Math.round(city?.main?.temp) + "°C"}</h1>
                <p>64°C/43°C</p>
              </div>

              <div className="data_bx">
                <div className="box_11 check">
                  <img src={wind} alt="" /> <p>{city?.wind?.speed}</p>
                </div>
                <div className="box_12 check">
                  <img src={umber} alt="" />
                  <p>{city?.visibility}</p>
                </div>
                <div className="box_13 check">
                  <img src={drop} alt="" /> <p>{city?.main?.humidity}</p>
                </div>
              </div>
            </div>
            <div className="date_conatiener">
              <p>
                Today, {fullyear} {monthname} {year}
              </p>
              <h1>
                {city?.name} {city?.sys?.country}
              </h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
