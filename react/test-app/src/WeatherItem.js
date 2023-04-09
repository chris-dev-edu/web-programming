import "./WeatherItem.css";
import sun from "./images/sun.png";
import rain from "./images/rain.png";
import clear from "./images/clear.png";
import clear_rain from "./images/clear-rain.png";
import cloudy_rain from "./images/cloudy-rain.png";

const Icons = {
  sun: sun,
  rain: rain,
  clear: clear,
  clear_rain: clear_rain,
  cloudy_rain: cloudy_rain,
};

function WeatherItem(props) {
  const { weather, date, highestTemp, lowestTemp } = props;

  return (
    <div className="container box">
      <div className="date">{date}</div>
      <img className="icon" src={Icons[weather]} />
      <div className="temperature">{`${lowestTemp}℃/${highestTemp}℃`}</div>
      <div className="weather">{weather}</div>
    </div>
  );
}

export default WeatherItem;
