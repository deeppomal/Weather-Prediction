import MetricCard from "./MetricCard";

const WeatherMetrics = ({data,selected}) => {

    const sunriseUrl = "https://cdn-icons-png.flaticon.com/512/787/787604.png";
    const sunsetUrl = "https://cdn-icons-png.flaticon.com/512/2924/2924900.png"
    const pressureUrl = "https://cdn-icons-png.flaticon.com/512/1839/1839341.png";
    const humidityUrl = "https://cdn-icons-png.flaticon.com/512/728/728093.png"
    const speedUrl = "https://cdn-icons-png.flaticon.com/512/1375/1375420.png";

    const convertTime=(time)=>{
        var date = new Date(time * 1000);
        var hours = date.getHours() === 0 ? "12" : date.getHours() > 12 ? date.getHours() - 12 : date.getHours() ;
        var minutes = "0" + date.getMinutes();
        var ampm = date.getHours() < 12 ? " AM" : " PM";
        var formattedTime = hours + ':' + minutes.substr(-2) + ampm;
        return formattedTime
    }

    return ( 
        <div className="weatherMetrics">
            <div className="metricContainer">
                <MetricCard url={sunriseUrl} alt ="sunrise" title={convertTime(data.daily[selected].sunrise)} />
                <MetricCard url={sunsetUrl} alt ="sunset" title={convertTime(data.daily[selected].sunset)} />
            </div>
            <div className="metricContainer">
                <MetricCard url={pressureUrl} alt ="pressure" title={data.daily[selected].pressure +" hPa"} />
                <MetricCard url={humidityUrl} alt ="humidity" title={data.daily[selected].humidity + " %"} />
                <MetricCard url={speedUrl} alt ="speed" title={data.daily[selected].wind_speed +" m/s"} />
            </div>
        </div>
     );
}
 
export default WeatherMetrics;