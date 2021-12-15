const WeatherSummary = ({data,selected}) => {
    const description = data.daily[selected].weather[0].description;
    const imgUrl = data.daily[selected].weather[0].icon;
    return ( 
        <div className="cardDesc">
            <img src={"http://openweathermap.org/img/wn/" +imgUrl+"@2x.png"} alt="description"/>
            <p>{description}</p>
        </div>
     );
}
 
export default WeatherSummary;