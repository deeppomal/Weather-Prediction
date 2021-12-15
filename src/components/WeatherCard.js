const WeatherCard = ({item,index,handleClick,selected}) => {

    const maxTemp = parseInt(item.temp.max);
    const minTemp = parseInt(item.temp.min);
    const main =  item.weather[0].main;
    const imgUrl = item.weather[0].icon;
    return ( 
        <div className={`${selected===index ? "weatherItem weatherItemSelected" : "weatherItem" }`} 
            onClick={()=>handleClick(index)} key={index}>
            <p>{main}</p>
            <img src={"http://openweathermap.org/img/wn/" +imgUrl+".png"} alt="description"/>
            <div className="temp">
                <p id="celcText">{maxTemp}°</p>
                <p id="fahText">{minTemp}°</p>
            </div>                        
        </div>
     );
}
 
export default WeatherCard;