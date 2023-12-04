
const Locations = () =>{
    return(
        <div className="companyContainer">
            Company
            <div className="LocationContainer">
                Locations
                <div className="videoWrapper">
                <header className="cover">header with opacity so youd see what is under it</header>
                < div className="mapLink">
                    <iframe src="https://www.meteoblue.com/en/weather/maps/widget/vienna-international-airport_austria_2761335?windAnimation=
                    0&windAnimation=1&gust=0&gust=1&satellite=0&satellite=1&cloudsAndPrecipitation=0&cloudsAndPrecipitation=1&temperature=0&
                    temperature=1&sunshine=0&sunshine=1&extremeForecastIndex=0&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&
                    lengthunit=metric&zoom=5&autowidth=auto" 
                    // sandbox="allow-top-navigation allow-scripts allow-forms" 
                    className="metheor"
                    >
                    </iframe>
                </div>
                </div>
                <div>
                    <div> <a href="https://www.meteoblue.com/en/weather/maps/vienna-international-airport_austria_2761335?utm_source=weather_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget" >meteoblue</a></div>
                </div>
                <div className="videoWrapper">
                <header className="cover">header with opacity so youd see what is under it</header>
                < div className="mapLink">
                    
                    <iframe src="https://www.meteoblue.com/en/weather/maps/widget/paris-charles-de-gaulle-airport_france_6269554?windAnimation=0&gust=0&satellite=0&satellite=1&clouds
                    AndPrecipitation=0&cloudsAndPrecipitation=1&temperature=0&temperature=1&sunshine=0&sunshine=1&extreme
                    ForecastIndex=0&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom
                    =5&autowidth=auto"
                    // sandbox="allow-top-navigation allow-scripts allow-forms" 
                    className="metheor"
                    >
                    </iframe>
                </div>
                </div>
                <div>
                    <div> <a href="https://www.meteoblue.com/en/weather/maps/paris-charles-de-gaulle-airport_france_6269554?utm_source=weather_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget" >meteoblue</a></div>
                </div>
            </div>
        </div>
    )

}
export default Locations