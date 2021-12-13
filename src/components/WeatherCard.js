const WeatherCard = ({item,index,handleClick,selected}) => {
    return ( 
        <div className={`${selected===index ? "weatherItem weatherItemSelected" : "weatherItem" }`} 
            onClick={()=>handleClick(index)} key={index}>
            <p>{item.weather[0].main}</p>
            <img src={"http://openweathermap.org/img/wn/" +item.weather[0].icon+".png"} alt="description"/>
            <div className="temp">
                <p id="celcText">{parseInt(item.temp.max)}°</p>
                <p id="fahText">{parseInt(item.temp.min)}°</p>
            </div>                        
        </div>
     );
}
 
export default WeatherCard;