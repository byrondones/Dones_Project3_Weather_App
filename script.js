//Declared API Keys
const apiKey = "7257a2d6c0f8cae4bcaff822109e1933";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany";

//Declared DOM elements to call only Var Name
const addCard = document.querySelector(`#btnAddCard`);
const searchCityBtn = document.querySelector(`#btnSearch`);
let searchCityInput = document.querySelector(`#inputSearch`);
let cardContent = document.querySelector(`#cardContent`);
let weatherIcon = document.querySelector(`#weatherIcon`);
let card = document.querySelector(`.card`);
let weatherBg = document.querySelector(`#videoBg`)
let logo = document.querySelector(`#logoArea`);

//Search Button Function
function searchCity(){

    //A condition to see if the input is Not Empty
    if(searchCityInput.value != ""){

        //fetches the data from the API
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchCityInput.value}&appid=7257a2d6c0f8cae4bcaff822109e1933`)

        .then(response => response.json())
        .then(forCast => {

        //Converts float values to whole number
        let tempValue = Math.floor(forCast.main.temp);
        let tempMinValue = Math.floor(forCast.main.temp_min);
        let tempMaxValue = Math.floor(forCast.main.temp_max);
        let tempFeelsValue = Math.floor(forCast.main.feels_like);

        //Modifying the card content Dom element to show the values from the API
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

        //condition to change the Weather logo and background depending on the user searched city
        if(forCast.weather[0].main === 'Clouds'){
            weatherIcon.innerHTML = `
            <img src="images/2.png" class="d-block mx-auto my-auto icon">
            `;
            weatherBg.innerHTML = `
            <video id="background-video" autoplay loop muted>
                <source src="videos/Cloudy.mp4" type="video/mp4">
            </video>
            `;

        }else if(forCast.weather[0].main === 'Clear'){
            weatherIcon.innerHTML = `
            <img src="images/1.png" class="d-block mx-auto my-auto icon">
            `;
            weatherBg.innerHTML = `
            <video id="background-video" autoplay loop muted>
                <source src="videos/Clear.mp4" type="video/mp4">
            </video>
            `;

        }else if(forCast.weather[0].main === 'Rain'){
            weatherIcon.innerHTML = `
            <img src="images/4.png" class="d-block mx-auto my-auto icon">
            `;
            weatherBg.innerHTML = `
            <video id="background-video" autoplay loop muted>
                <source src="videos/Rain.mp4" type="video/mp4">
            </video>
            `;

        }else if(forCast.weather[0].main === 'Snow'){
            weatherIcon.innerHTML = `
            <img src="images/7.png" class="d-block mx-auto my-auto icon">
            `;
            weatherBg.innerHTML = `
            <video id="background-video" autoplay loop muted>
                <source src="videos/Snow.mp4" type="video/mp4">
            </video>
            `;

        }else if(forCast.weather[0].main === 'Thunderstorm'){
            weatherIcon.innerHTML = `
            <img src="images/3.png" class="d-block mx-auto my-auto icon">
            `;
            weatherBg.innerHTML = `
            <video id="background-video" autoplay loop muted>
                <source src="videos/Thunderstorm.mp4" type="video/mp4">
            </video>
            `;

        }else if(forCast.weather[0].main === 'Windy'){
            weatherIcon.innerHTML = `
            <img src="images/8.png" class="d-block mx-auto my-auto icon">
            `;
            weatherBg.innerHTML = `
            <video id="background-video" autoplay loop muted>
                <source src="videos/Windy.mp4" type="video/mp4">
            </video>
            `;

        }else{
            alert("Error!");
        };

        //classlist for the function of cards
        logo.classList.add("logoAfter");

        card.classList.add("cardAfter");
        card.classList.remove("cardClose");

        //reseting input field
        searchCityInput.value = "";
    });
    }else{
        alert("Field cannot be Empty!");
    }
};

//Button close function
function btnClose(){
    card.classList.add("cardClose");

    logo.classList.remove("logoAfter");

    cardContent.innerHTML = "";
    weatherIcon.innerHTML = "";
};