let data;
const inputBox = document.getElementById("inputBox");
const countryName =  document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const preventDefaultAction = async (event) =>{
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Enter City Name!!")
        return
    }
const city = inputBox.value;
console.log('city', city);
const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=903073f7e2be48478a8111815231902&q=${city}`);

console.log('fetchData', fetchData);

const jsonData = await fetchData.json();
data = jsonData;
console.log('data', data);
countryName.innerHTML = data.location.country;
stateName.innerHTML = data.location.region;
cityName.innerHTML = data.location.name;
humidity.innerHTML = data.current.humidity;
windSpeed.innerHTML = data.current.wind_kph;
temprature.innerHTML = data.current.temp_c;
logoImage.src = data.current.condition.icon;
weatherStatus.innerHTML = data.current.condition.text;


}