import React, { useEffect, useState } from 'react'
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
export default function Index() {
    const [location, setLocation] = useState(null);
    const [saved, setSaved] = useState(false);
    const locationCollectionRef = collection(db, "location")
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                setLocation(pos);
            })
        } else {
            console.log("Geolocation not support");
        }
    }, [])

    useEffect(async () => {
        if (location) {
            await addDoc(locationCollectionRef, { lat: location.coords.latitude, long: location.coords.longitude });
            setSaved(true);
        }
    }, [location])
    return (
        <div className="bg-service">
            <div className="pt-80">
                <p className="service-heading ">
                    Location
                </p>
                <div className="w-full flex justify-end py-50">
                    <div className="flex flex-col w-33 ">
                        <div className="flex-col min-h-500">
                            {
                                !location ? <p> Getting your longitute & longitute</p> : <div>
                                    <p>
                                        <span className="weather-heading">Latitude :</span> {location.coords.latitude}
                                    </p>
                                    <p>
                                        <span className="weather-heading">Longitide :</span> {location.coords.longitude}
                                    </p>
                                    {saved && <p>Location Saved !</p>}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
