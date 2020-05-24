
let city = document.querySelector("#city")
var button = document.querySelector("button")
const img = document.querySelector("img")
const temp = document.querySelector(".temperature-value p")
const location_name = document.querySelector(".location p")
const key = "ebab135f1e4a4b7dc81a216f550fcfb3"
const temperatureDescription = document.querySelector(".temperature-description p")
let cityName
city.addEventListener("keyup",getval)
function getval(){
        console.log(city.value);
        
        if(city.value)  {
        cityName = city.value.toLowerCase()
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
        console.log(url);
        
        fetch(url).then((response)=>{
            return response.json();
            
            }).then((weatherInfo)=>{
                
                getWhenReady(weatherInfo)
            })
        }}
    
const getWhenReady = (weather) => {
    if(weather.cod === "404"){
        temp.firstElementChild.innerHTML = weather.message 
        temp.lastElementChild.innerText = ""
        img.src = `icons/unknown.png`
        temperatureDescription.innerText = ""
        location_name.innerText = ""
    }else{
    
    const{main : {temp : temperature},name,weather : [{description,icon}]} = weather
    
    img.src = `icons/${icon}.png`
    temperatureDescription.innerHTML = description
    temp.lastElementChild.innerText = "°C"

    location_name.innerHTML = name
    tempInCelcius = kelvinToCelcius(temperature)
    temp.firstElementChild.innerText = tempInCelcius.toFixed(2)
        
    }
    
    }

const kelvinToCelcius = (temperature) => temperature -273.15



