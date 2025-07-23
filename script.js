let API_KEY = "GIxs2igVrqbaTY5LA3C7m8JeneL8oR89";

async function showweather() {
  const searchcity = document.getElementById("searchinput").value.trim();
  const weatherupdate = document.getElementById("weather");

  try {
    
    const locationRes = await fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/search?q=${searchcity}&apikey=${API_KEY}`
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




























// // let key = 	"	GIxs2igVrqbaTY5LA3C7m8JeneL8oR89";
 
// let API_KEY =   "GIxs2igVrqbaTY5LA3C7m8JeneL8oR89";


// let city = "karachi"


//  function showweather(){
//   const searchcity = document.getElementById("searchinput").value;
//   const url =  `http://dataservice.accuweather.com/locations/v1/cities/search?q=${searchcity}&apikey=${API_KEY}`
 


//  fetch(url)
// .then(response => {
// if(!response.ok) {
//   console.error("city  not found");
//   return response.json();
// }


// })
// .then(data  => {
// const  weatherupdate =  document.getElementById("weather");
// weatherupdate.innerHTML = `
// <h2>${data.name}, ${data.sys,country}</h2>
//   <p>🌡️ Temp: ${data.main.temp}°C</p>
//   <p>☁️ Weather: ${data.weather[0].main}</p>
//   <p> 😮‍💨 Wind: ${data.wind.speed} m/s</p>
// `

// })
// .catch(error =>{
//   document.getElementById("weather").innerHTML= `<p>${error.message}</p>`;
// })
//  }



// fetch(
//   `http://dataservice.accuweather.com/locations/v1/cities/search?q=${city}&apikey=${API_KEY}`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     let cityData = data[0];
//     console.log("cityData");
//     console.log(cityData);
//     console.log("*********************");

//     return fetch(
//       `http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${API_KEY}`
//     );
//   })
//   .then((response) => response.json())
//   .then((data) => console.log("weather data ->", data))
//   .catch((err) => console.log(err));