let apiKey = "42cfb03843fea6b364a84b6b098e00e0" ;
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?" ;
let city ;
let userCity = document.getElementById("userText") ;
let temperature = document.getElementById("temp") ;
let ct = document.getElementById("city") ;
let humidity = document.getElementById("humditiy_info") ;
let windInfo = document.getElementById("wind_info") ;
let weatherImage = document.querySelector(".weather_img") ;

async function getWeatherData(){
    if(userCity.value == ""){
        alert("Enter A City Name") ;
    }
    else{
    city = userCity.value ;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`) ;
    let data = await response.json() ;
    console.log(data) ;
    ct.innerHTML = data.name ;
    temperature.innerHTML = Math.round(data.main.temp - 273.15) + "°C" ;
    humidity.innerHTML = data.main.humidity + "%" ;
    windInfo.innerHTML = data.wind.speed + "km/h" ;
    userCity.value = "" ;
    if(data.weather[0].main == "Clear"){
        weatherImage.src = "Clear.png" ;
    }
    else if(data.weather[0].main == "Snow"){
        weatherImage.src = "Sonw.png" ;
    }
    else if(data.weather[0].main == "Clouds"){
        weatherImage.src = "Sonw.png" ;
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImage.src = "drizzle.png" ;
    }
    else if(data.weather[0].main == "Mist"){
        weatherImage.src = "mist.png" ;
    }
    else if(data.weather[0].main == "Rain"){
        weatherImage.src = "rain.png" ;
    }
    console.log(data) ;
}
}