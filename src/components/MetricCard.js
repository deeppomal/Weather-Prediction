const MetricCard = ({url,alt,title}) => {

    return ( 
        <div className="metricCard">
            <img src={url} alt={alt} />
            <p>{title}</p>
        </div>
     );
}
 
export default MetricCard;