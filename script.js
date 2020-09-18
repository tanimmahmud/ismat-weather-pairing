//1. when a user click submit button, get city name from input
document.getElementById('submit').addEventListener('click', () => {
  const cityName = document.getElementById('city').value;
  const apiKey = "3ed2152c36e47de16d42e0391eca1b0d";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  //2. call api with city name
  axios.get(url)
    .then(res => {
      //3. get current weather from api response
      const humidity = res.data.main.humidity;
      //4. put current weather to info paragraph
      document.getElementById('info').innerText = `Humidity of ${cityName} is ${humidity}.`;
      document.getElementById('city').value = "";
    });


})
