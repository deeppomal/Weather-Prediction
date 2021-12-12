import {  useEffect, useState } from "react";
import useFetch from "../util/useFetch";
import Loader from "react-loader-spinner";

const Weather = () => {

    

    const [selected,setSelected] = useState(0);
    const [lat,setLat] = useState(null)
    const [long,setLong] = useState(null)

    const {data,isPending } = useFetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+long+"&units=metric&appid=22eaefec51477f121e473ae3650dae2e")
    
    const handleClick=(index)=>{
        setSelected(index)
    }

    useEffect(()=>{
        
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
    },[])
    
    const convertTime=(time)=>{

        var date = new Date(time * 1000);
        var hours = date.getHours() === 0 ? "12" : date.getHours() > 12 ? date.getHours() - 12 : date.getHours() ;
        var minutes = "0" + date.getMinutes();
        var ampm = date.getHours() < 12 ? " AM" : " PM";
        var formattedTime = hours + ':' + minutes.substr(-2) + ampm;
        return formattedTime
    }

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
                                <div className={`${selected===index ? "weatherItem weatherItemSelected" : "weatherItem" }`} 
                                onClick={()=>handleClick(index)} key={index}>
                                    <p>{item.weather[0].main}</p>
                                    <img src={"http://openweathermap.org/img/wn/" +item.weather[0].icon+".png"} alt="description"/>
                                    <div className="temp">
                                        <p id="celcText">{parseInt(item.temp.max)}°</p>
                                        <p id="fahText">{parseInt(item.temp.min)}°</p>
                                    </div>
                                
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="detailsCard">
                        <div className="cardDesc">
                            <img src={"http://openweathermap.org/img/wn/" +data.daily[selected].weather[0].icon+"@2x.png"} alt="description"/>
                            <p>{data.daily[selected].weather[0].description}</p>
                        </div>
                        <div className="metricContainer">
                            <div className="metricCard">
                                <img src={"https://cdn-icons-png.flaticon.com/512/787/787604.png"} alt="sunrise"/>
                                <p>{convertTime(data.daily[selected].sunrise)}</p>
                            </div>
                            <div className="metricCard">
                                <img src={"https://cdn-icons-png.flaticon.com/512/2924/2924900.png"} alt="sunset"/>
                                <p>{convertTime(data.daily[selected].sunset)}</p>
                            </div>
                        </div>
                        <div className="metricContainer">
                            <div className="metricCard">
                                <img id="metricImg" src={"https://cdn-icons-png.flaticon.com/512/1839/1839341.png"} alt="pressure"/>
                                <p>{data.daily[selected].pressure} hPa</p>
                            </div>
                            <div className="metricCard">
                                <img  id="metricImg" src={"https://cdn-icons.flaticon.com/png/512/2828/premium/2828802.png?token=exp=1639329542~hmac=c32ae96bbe35449591b9dcc2db1a04f0"} alt="humidity"/>
                                <p>{data.daily[selected].humidity} %</p>
                            </div>
                            <div className="metricCard">
                                <img  id="metricImg" src={"https://cdn-icons-png.flaticon.com/512/1375/1375420.png"} alt="windSpeed"/>
                                <p>{data.daily[selected].wind_speed} m/s</p>
                            </div>  
                        </div>
                    </div>
                </div>
               
            }
        </div>
     );
}
 
export default Weather;