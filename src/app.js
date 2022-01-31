let apiKey = "bed09b6e871276d7a5b1c881b630cf54";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;

axios.get(url).then(displayTemperature);
