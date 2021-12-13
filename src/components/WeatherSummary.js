const WeatherSummary = ({data,selected}) => {
    return ( 
        <div className="cardDesc">
            <img src={"http://openweathermap.org/img/wn/" +data.daily[selected].weather[0].icon+"@2x.png"} alt="description"/>
            <p>{data.daily[selected].weather[0].description}</p>
        </div>
     );
}
 
export default WeatherSummary;