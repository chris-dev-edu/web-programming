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
  return (
    <div className="container box">
      <div className="date">4/9</div>
      <img className="icon" src={sun} />
      <div className="temperature">15℃/20℃</div>
      <div className="weather">맑음</div>
    </div>
  );
}

export default WeatherItem;
