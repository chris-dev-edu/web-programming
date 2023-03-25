function onGeoOk(position) {
  const API_KEY = "2834387742b25d5393a21e88fee8246a";
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  // console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("날씨 정보를 가져오지 못했어요🤔");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
