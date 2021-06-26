/*************************** Weather Summary Section **************************************/

const cityId = 5604473;
const appId = '4c6ee178fbcaa341e556052daf49c4ef';

const weatherURL = `//api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${appId}&units=imperial`;

fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.querySelector('#weather').textContent = jsObject.weather[0].description.toUpperCase();
    document.querySelector('#temperature').textContent = jsObject.main.temp_max.toFixed(0);
    document.querySelector('#humidity').textContent = jsObject.main.humidity;
    document.querySelector('#windspeed').textContent = jsObject.wind.speed.toFixed(0);
  });

/************************************** Forecast Section ********************************/

const forecastURL = `//api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${appId}&units=imperial`;

const todayDate = new Date();

const todayNumber = todayDate.getDay();

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//console.log(weekday[3]);

fetch(forecastURL)
  .then(response => response.json())
  .then(weatherinfo => {
    //console.log(weatherinfo);

    let myList = weatherinfo.list;

    let forecastToday = todayNumber;

    for (let i = 0; i < myList.length; i++) {
      let time = myList[i].dt_txt;

      if (time.includes("12:00:00")) {
        
        forecastToday += 1;

        if (forecastToday === 7) {forecastToday = 0;}

        let dayName = document.createElement('h3');
        dayName.setAttribute('class', 'forecastheader');
        dayName.textContent = weekday[forecastToday];

        let temp = document.createElement('span');
        temp.setAttribute('class', 'temperature');
        temp.textContent = `${weatherinfo.list[i].main.temp.toFixed(0)}\xB0F`;

        let iconCode = weatherinfo.list[i].weather[0].icon;
        let iconPath = `//openweathermap.org/img/wn/${iconCode}@2x.png`;
        let icon = document.createElement('img');
        icon.setAttribute('class', 'weathericon');
        icon.src = iconPath;

        let dayCard = document.createElement('div');
        dayCard.setAttribute('class', 'weathercard');
        dayCard.appendChild(dayName);
        dayCard.appendChild(icon);
        dayCard.appendChild(temp);

        document.querySelector('.forecast').appendChild(dayCard);
      }
    }
  });