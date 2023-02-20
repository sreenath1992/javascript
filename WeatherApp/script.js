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

// Function to set background image based on temperature value
const setBackground = (temperature) => {
    const tempVal = parseInt(temperature);
    if (tempVal <= 1) {
      document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181__340.jpg)";
    } else if (tempVal >= 1 && tempVal <=10 ) {
      document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/08/31/11/35/alps-2700403_960_720.jpg)";
    } else if (tempVal >=10 && tempVal <=20){
      document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869__340.jpg)";
    }
    else{
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869__340.jpg)";
    }
  };

  
  inputBox.addEventListener("input", () => {
    setBackground(data.current.temp_c);
  });

}