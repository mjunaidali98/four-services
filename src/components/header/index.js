import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Index() {
    let location = useLocation();
    const [path, setPath] = useState("/");
    useEffect(() => {
        setPath(location.pathname);
    }, [location])
    return (
        <div className={`flex justify-center absolute left-0 right-0 ${path !== "/" || path !== "/home" && "hidden"}`}>
            <nav >
                <ul className="flex justify-between">
                    <li className="navbar-button" ><Link to="/">Services</Link></li>
                    <li className="navbar-button"  ><Link to="/weather">Weather Report</Link></li>
                    <li className="navbar-button" ><Link to="/covid-stats">Covid Stats</Link></li>
                    <li className="navbar-button" ><Link to="/wordnet">Word Net</Link></li>
                </ul>
            </nav>
        </div>
    )
}
