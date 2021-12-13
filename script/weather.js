
const apiKey = 'c715e818ffbbcae5a0cb47710f7f9049';



const displayWeather = (data) => {
  const { name } = data;
  const { icon } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".location").innerText = `${name}`; /*  I HAD TO HARD CODE THE STATE VALUE HERE */
  document.querySelector("#temp-value").innerText = `${temp} °C`;
  document.querySelector(".temp-value").innerText = `${temp} °C`;
  document.querySelector("#temp-icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  document.querySelector("#climate").innerText = `humidity: ${humidity}%`;
  document.querySelector('#wind').innerText = `wind: ${speed}km/h`;

};

window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      long = pos.coords.longitude;
      lat = pos.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
      fetch(api)
        .then((response) => response.json())
        .then((data) => displayWeather(data));
    });
  }
});

const weather = {
  fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${current.city}&units=metric&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => displayWeather(data));
  },
};
