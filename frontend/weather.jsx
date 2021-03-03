import React, { useState, useEffect } from 'react'

export default function Weather() {
    const api = 'd25010b6a3398a92b9aa4c6cb6dc5db3'
    const [lat, setLat] = useState(0); 
    const [lon, setLon] = useState(0); 
    const geo = navigator.geolocation; 
    geo.getCurrentPosition(showPosition); 
    function showPosition(position){
        setLat(position.coords.latitude); 
        setLon(position.coords.longitude); 
        
    }

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`)
            .then(response => response.json())
            .then(data => console.log(data)); 
    }, []); 


    return (
        <div>
        </div>
    )
}