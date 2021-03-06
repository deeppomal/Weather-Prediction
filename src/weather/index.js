import {  useEffect, useState } from "react";
import useFetch from "../util/useFetch";
import Loader from "react-loader-spinner";
import WeatherCard from "../components/WeatherCard";
import WeatherSummary from "../components/WeatherSummary";
import WeatherMetrics from "../components/WeatherMetrics";

const Weather = () => {

    

    const [selected,setSelected] = useState(0);
    const [lat,setLat] = useState("40.7128")
    const [long,setLong] = useState("74.0060")

    const {data,isPending } = useFetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+long+"&units=metric&appid="+process.env.REACT_APP_API_TOKEN)
    
    const handleClick=(index)=>{
        setSelected(index)
    }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
    },[])
    
    

    return ( 
        <div className="weatherContainer">
            {isPending && 
                <div className="loading">
                     <Loader
                        type="TailSpin"
                        color={"#BDBDBD"}
                        height={50}
                        width={50}
                    />
                </div>
            }
            {data && 
                <div className="loadedContent">
                    <div className="location">
                        <p>8 Day Weather Prediction</p>
                    </div>
                    <div className="weatherList">
                    {
                        data.daily.map((item,index)=>{
                            return(
                                <WeatherCard item={item} index={index} handleClick={handleClick} selected={selected} key={index} />
                            )
                        })
                    }
                    </div>
                    <div className="detailsCard">
                        <WeatherSummary data={data} selected={selected} />
                        <WeatherMetrics data={data} selected={selected} />
                    </div>
                </div>
            }
        </div>
     );
}
 
export default Weather;