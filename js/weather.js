const API_KEY = "57728fc4e4d450351eee5c0224e7aa5f";

function onGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("You live in", latitude, longitude);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name; 
    });  //fetch가 서버에 물어보면 시간이 걸림. 따라서 then을 쓴다.
}

function onGeoError() {
    alert("Can't find you! No weather for you!");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
