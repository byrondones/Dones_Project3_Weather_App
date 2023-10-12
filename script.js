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
let releaseNotes = document.querySelector('#updateNotesBtn');

//Search Button Function

try {
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
                <p id="weatherDesc" class="text-center fw-medium" style="margin-bottom: -5px;">${forCast.weather[0].description}</p>
                <p class="text-center fw-bold temp">${tempValue}°c</p>
                <p class="text-center fw-medium location">${forCast.name}</p>
    
                <div class="text-center" id="feelsLike">
                    <span class="fs-5">Feels Like:</span>
                    <span class="fw-bold fs-5">${tempFeelsValue}°c</span>
                </div>
    
                <div id="slot1">
                    <p>Min Temp:</p>
                    <span class="fw-bold">${tempMinValue}°c</span>
                    <p>Max Temp:</p>
                    <span id="slot4" class="fw-bold">${tempMaxValue}°c</span>
                </div>
                
                <div id="slot2">
                    <span>Humidity:</span>
                    <span class="fw-bold">${forCast.main.humidity}%</span>
                    <br>
                    <span>Wind Speed:</span>
                    <span class="fw-bold">${forCast.wind.speed} km/h</span>
                </div>
            `;
    
        console.log(forCast.weather[0].main)
    
            //condition to change the Weather logo and background depending on the user searched city
            if(forCast.weather[0].main === 'Clouds'){
                weatherIcon.innerHTML = `
                <img src="images/2.png" class="d-block mx-auto my-auto icon">
                `;
                weatherBg.innerHTML = `
                <video id="background-video" autoplay loop muted webkit-playsinline playsinline>
                    <source src="videos/Cloudy.mp4" type="video/mp4">
                </video>
                `;
    
            }else if(forCast.weather[0].main === 'Clear'){
                weatherIcon.innerHTML = `
                <img src="images/1.png" class="d-block mx-auto my-auto icon">
                `;
                weatherBg.innerHTML = `
                <video id="background-video" autoplay loop muted webkit-playsinline playsinline>
                    <source src="videos/Clear.mp4" type="video/mp4">
                </video>
                `;
    
            }else if(forCast.weather[0].main === 'Rain' || forCast.weather[0].main === 'Drizzle'){
                weatherIcon.innerHTML = `
                <img src="images/4.png" class="d-block mx-auto my-auto icon">
                `;
                weatherBg.innerHTML = `
                <video id="background-video" autoplay loop muted webkit-playsinline playsinline>
                    <source src="videos/Rain.mp4" type="video/mp4">
                </video>
                `;
    
            }else if(forCast.weather[0].main === 'Snow'){
                weatherIcon.innerHTML = `
                <img src="images/7.png" class="d-block mx-auto my-auto icon">
                `;
                weatherBg.innerHTML = `
                <video id="background-video" autoplay loop muted webkit-playsinline playsinline>
                    <source src="videos/Snow.mp4" type="video/mp4">
                </video>
                `;
    
            }else if(forCast.weather[0].main === 'Thunderstorm'){
                weatherIcon.innerHTML = `
                <img src="images/3.png" class="d-block mx-auto my-auto icon">
                `;
                weatherBg.innerHTML = `
                <video id="background-video" autoplay loop muted webkit-playsinline playsinline>
                    <source src="videos/Thunderstorm.mp4" type="video/mp4">
                </video>
                `;
    
            }else if(forCast.weather[0].main === 'Windy'){
                weatherIcon.innerHTML = `
                <img src="images/8.png" class="d-block mx-auto my-auto icon">
                `;
                weatherBg.innerHTML = `
                <video id="background-video" autoplay loop muted webkit-playsinline playsinline>
                    <source src="videos/Windy.mp4" type="video/mp4">
                </video>
                `;
    
            }else if(forCast.weather[0].main === 'Dust'){
                weatherIcon.innerHTML = `
                <img src="images/11.png" class="d-block mx-auto my-auto icon">
                `;
                weatherBg.innerHTML = `
                <video id="background-video" autoplay loop muted webkit-playsinline playsinline>
                    <source src="videos/Dusty.mp4" type="video/mp4">
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
        };
};
} catch (error) {
    console.error('Error fetching data:', error);
}


//Button close function
function btnClose(){
    card.classList.add("cardClose");

    logo.classList.remove("logoAfter");

    cardContent.innerHTML = "";
    weatherIcon.innerHTML = "";
};

//Modal
