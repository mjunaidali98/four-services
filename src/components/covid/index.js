import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_KEY } from "../../utils/variables";
export default function Index() {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        handleStats();
    }, [])

    const handleStats = (e) => {
        setData(null);
        setError(null);

        let url = `https://disease.sh/v3/covid-19/all`
        axios.get(url).then((res) => {
            setData(res.data);
        }).catch((err) => {
            setError("An error Occured!");
            setData(null);
        })

    }
    const convertTime = () => {
        let unix_timestamp = 1605404179
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return formattedTime
    }
    return (
        <div className="bg-covid">
            <div className="pt-80">
                <p className="service-heading ">
                    Current Covid-19 Worldwide Statistics
                </p>
                <div className="w-full flex justify-end py-50">
                    <div className="flex flex-col w-33 ">
                        <div className="flex-col min-h-500">
                            {data && <div className="flex-col">
                                <p style={{ paddingBottom: "20px" }} className="w-5050 location">Updated: {convertTime(data.updated)} </p>

                                <p className="weather-data ">
                                    <span className="weather-heading">Today Cases:</span> {data.todayCases}
                                </p>
                                <p className="weather-data ">
                                    <span className="weather-heading">Today Deaths:</span> {data.todayDeaths}
                                </p>

                                <p className="weather-data ">
                                    <span className="weather-heading">Today Recovered:</span> {data.todayRecovered}
                                </p>
                                <hr style={{ color: "#000" }} />
                                <p className="weather-data ">
                                    <span className="weather-heading">Total Cases:</span> {data.cases}
                                </p>
                                <p className="weather-data ">
                                    <span className="weather-heading">Total Active Cases:</span> {data.active}
                                </p>
                                <p className="weather-data ">
                                    <span className="weather-heading">Total Deaths:</span> {data.deaths}
                                </p>
                                <p className="weather-data ">
                                    <span className="weather-heading">Recovered:</span> {data.recovered}
                                </p>
                                <p className="weather-data ">
                                    <span className="weather-heading">Test Done:</span> {data.tests}
                                </p>


                            </div>}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
