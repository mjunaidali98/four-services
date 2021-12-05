import React from 'react'
import { Link } from 'react-router-dom';
export default function Index() {

    return (
        <div className="">
            <p className="home-text"> Services</p>
            <div className="w-full flex justify-center py-50">
                <div className="flex flex-col w-33 ">
                    <Link className="services-button" to="/weather">
                        Weather
                    </Link>
                    <Link className="services-button" to="/covid-stats">
                        Covid Stats
                    </Link>
                    <Link className="services-button" to="/wordnet">
                        Wordnet
                    </Link>
                    <Link className="services-button" to="/location">
                        Location
                    </Link>
                </div>
            </div>
        </div >
    )
}
