import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_KEY } from "../../utils/variables";
export default function Index() {
    const [input, setInput] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    // useEffect(() => {
    //     const google = window.google;
    //     var inputplace = document.getElementById('searchTextField');
    //     var options = {
    //         types: ['(cities)'],
    //     };
    //     var autocomplete = new google.maps.places.Autocomplete(inputplace, options);
    // }, [])

    const handleForm = (e) => {
        e.preventDefault();
        setData(null);
        setError(null);
        if (!input) {
            setError("Please Enter City !");
        } else {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=9e0fc0914939c270f35d7f2fda6bf08e&units=metric`
            axios.get(url).then((res) => {
                setData(res.data);
            }).catch((err) => {
                setError("An error Occured!");
                setData(null);
            })
        }
    }
    return (
        <div className="bg-service">
            <div className="pt-80">
                <p className="service-heading ">
                    Current Weather
                </p>
                <div className="w-full flex justify-end py-50">
                    <div className="flex flex-col w-33 ">
                        <div className="flex-col min-h-500">
                            <form onSubmit={(e) => handleForm(e)}>
                                <input id="searchTextField" type="text" autocomplete="off" onChange={(e) => setInput(e.target.value)} placeholder="Enter City. i.e. New York, US." className="input" />
                                <button type="submit" className="submit">
                                    Submit
                                </button>

                                {error && <p className="error-message">{error}</p>}
                            </form>
                            {data && <div className="flex-col">
                                <div className="flex items-center justify-bewteen">
                                    <div className="flex items-center w-50">
                                        <img
                                            alt="Weather icon"
                                            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                        />
                                        <p className="temprature ">
                                            {data.main.temp} <span className="celcius">°C</span>
                                        </p>
                                    </div>

                                    <p className="w-50 location">Location: {`${data.name + "," + data.sys.country}`} </p>
                                </div>
                                <div className="weather-data">


                                    <p>
                                        <span className="weather-heading">Feels Like :</span> {data.main.feels_like} °C
                                    </p>

                                    <p>
                                        <span className="weather-heading">Humidity :</span>   {data.main.humidity} %
                                    </p>

                                    <p>
                                        <span className="weather-heading">Pressure :</span> {data.main.pressure} hPa
                                    </p>
                                    <p>
                                        <span className="weather-heading">Wind :</span> {data.wind.speed} meter/sec
                                    </p>
                                    <p>
                                        <span className="weather-heading">Weather :</span>  {data.weather[0].description}
                                    </p>
                                </div>


                            </div>}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
