let API_KEY = "GIxs2igVrqbaTY5LA3C7m8JeneL8oR89";

async function showweather() {
  const searchcity = document.getElementById("searchinput").value.trim();
  const weatherupdate = document.getElementById("weather");

  try {
    
    const locationRes = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?q=${searchcity}&apikey=${API_KEY}`
    );
    const locationData = await locationRes.json();

    if (locationData.length === 0) {
      weatherupdate.innerHTML = `<p>City not found</p>`;
      return;
    }

    const locationKey = locationData[0].Key;
    const cityName = locationData[0].LocalizedName;
    const countryName = locationData[0].Country.LocalizedName;

  
    const weatherRes = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
    );
    const weatherData = await weatherRes.json();
    const current = weatherData[0];

    weatherupdate.innerHTML = `
      <h2>${cityName}, ${countryName}</h2>
      <p><i class="fa-solid fa-temperature-high"></i> Temp: ${current.Temperature.Metric.Value}°C</p>
      <p><i class="fa-solid fa-cloud"></i> Weather: ${current.WeatherText}</p>
      <p><i class="fa-solid fa-clock"></i> Time: ${new Date(current.LocalObservationDateTime).toLocaleTimeString()}</p>
    `;
  } catch (error) {
    weatherupdate.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
























