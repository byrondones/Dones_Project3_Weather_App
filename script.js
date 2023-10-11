const apiKey = "7257a2d6c0f8cae4bcaff822109e1933";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany";

const addCard = document.querySelector(`#btnAddCard`);
const searchCityBtn = document.querySelector(`#btnSearch`);
let searchCityInput = document.querySelector(`#inputSearch`);
let cardContent = document.querySelector(`#cardContent`);
let weatherIcon = document.querySelector(`#weatherIcon`);
let card = document.querySelector(`.card`);
let weatherBg = document.querySelector(`#id`)
function searchCity(){
    if(searchCityInput.value != ""){
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchCityInput.value}&appid=7257a2d6c0f8cae4bcaff822109e1933`)

        .then(response => response.json())
        .then(forCast => {

        let tempValue = Math.floor(forCast.main.temp);
        let tempMinValue = Math.floor(forCast.main.temp_min);
        let tempMaxValue = Math.floor(forCast.main.temp_max);
        let tempFeelsValue = Math.floor(forCast.main.feels_like);

        cardContent.innerHTML = `
            <p class="text-center fw-medium" style="margin-bottom: -5px;">${forCast.weather[0].description}</p>
            <p class="text-center fw-bold temp">${tempValue}°c</p>
            <p class="text-center fw-medium location">${forCast.name}</p>

            <div id="slot1">
                <span>Min Temp:</span>
                <span class="fw-bold">${tempMinValue}°c</span>
                <br>
                <span>Humidity:</span>
                <span class="fw-bold" id="slot1">${forCast.main.humidity}%</span>
            </div>

            <div class="text-center" id="feelsLike">
                <span class="fs-5">Feels Like:</span>
                <span class="fw-bold fs-5">${tempFeelsValue}°c</span>
            </div>
            
            <div class="float-end" id="slot2">
                <span>Max Temp:</span>
                <span id="slot4" class="fw-bold">${tempMaxValue}°c</span>
                <br>
                <span>Wind Speed:</span>
                <span class="fw-bold" id="slot2">${forCast.wind.speed} km/h</span>
            </div>
        `;

        if(forCast.weather[0].main === 'Clouds'){
            weatherIcon.innerHTML = `
            <img src="images/2.png" class="d-block mx-auto my-auto icon">
            `;
        }else if(forCast.weather[0].main === 'Clear'){
            weatherIcon.innerHTML = `
            <img src="images/1.png" class="d-block mx-auto my-auto icon">
            `;
        }else if(forCast.weather[0].main === 'Rain'){
            weatherIcon.innerHTML = `
            <img src="images/4.png" class="d-block mx-auto my-auto icon">
            `;
        }else if(forCast.weather[0].main === 'Snow'){
            weatherIcon.innerHTML = `
            <img src="images/7.png" class="d-block mx-auto my-auto icon">
            `;
        }else if(forCast.weather[0].main === 'Thunderstorm'){
            weatherIcon.innerHTML = `
            <img src="images/3.png" class="d-block mx-auto my-auto icon">
            `;
        }else if(forCast.weather[0].main === 'Windy'){
            weatherIcon.innerHTML = `
            <img src="images/8.png" class="d-block mx-auto my-auto icon">
            `;
        }else{
            alert("Error!");
        };

        card.classList.add("cardAfter");
        card.classList.remove("cardClose");
        searchCityInput.value = "";
    });
    }else{
        alert("Field cannot be Empty!");
    }
};

function btnClose(){
    card.classList.add("cardClose");
    cardContent.innerHTML = "";
    weatherIcon.innerHTML = "";
};