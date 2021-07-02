/*************************** Preston Weather Summary Section **************************************/

const prestonId = 5604473;
const appId = '4c6ee178fbcaa341e556052daf49c4ef';

const prestonURL = `//api.openweathermap.org/data/2.5/weather?id=${prestonId}&appid=${appId}&units=imperial`;

fetch(prestonURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.querySelector('#weatherPreston').textContent = jsObject.weather[0].description.toUpperCase();
    document.querySelector('#temperaturePreston').textContent = jsObject.main.temp_max.toFixed(0);
    document.querySelector('#humidityPreston').textContent = jsObject.main.humidity;
    document.querySelector('#windspeedPreston').textContent = jsObject.wind.speed.toFixed(0);

    let t = jsObject.main.temp_max;
    let s = jsObject.wind.speed;
    let wc = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    let roundWC = Math.round(wc);
  
    if (s > 3 && t <= 50) {
      document.querySelector('#windchillPreston').textContent = roundWC + '\xB0F';
    } else {
      document.querySelector('#windchillPreston').textContent = "N/A";
    }
  });

/************************************** Preston Forecast Section ********************************/

const prestonForecastURL = `//api.openweathermap.org/data/2.5/forecast?id=${prestonId}&appid=${appId}&units=imperial`;

const todayDate = new Date();

const todayNumber = todayDate.getDay();

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//console.log(weekday[3]);

fetch(prestonForecastURL)
  .then(response => response.json())
  .then(weatherinfo => {
    //console.log(weatherinfo);

    let myList = weatherinfo.list;

    let forecastToday = todayNumber;

    for (let i = 0; i < myList.length; i++) {
      let time = myList[i].dt_txt;

      if (time.includes("18:00:00")) {
        
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

        document.querySelector('.forecastpreston').appendChild(dayCard);
      }
    }
  });

  /*************************** Fish Haven Weather Summary Section **************************************/

const fishHavenId = 5585000;

const fishHavenURL = `//api.openweathermap.org/data/2.5/weather?id=${fishHavenId}&appid=${appId}&units=imperial`;

fetch(fishHavenURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.querySelector('#weatherFish').textContent = jsObject.weather[0].description.toUpperCase();
    document.querySelector('#temperatureFish').textContent = jsObject.main.temp_max.toFixed(0);
    document.querySelector('#humidityFish').textContent = jsObject.main.humidity;
    document.querySelector('#windspeedFish').textContent = jsObject.wind.speed.toFixed(0);

    let t = jsObject.main.temp_max;
    let s = jsObject.wind.speed;
    let wc = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    let roundWC = Math.round(wc);
  
    if (s > 3 && t <= 50) {
      document.querySelector('#windchillFish').textContent = roundWC + '\xB0F';
    } else {
      document.querySelector('#windchillFish').textContent = "N/A";
    }
  });

  /************************************** Fish Haven Forecast Section ********************************/

const fishHavenForecastURL = `//api.openweathermap.org/data/2.5/forecast?id=${fishHavenId}&appid=${appId}&units=imperial`;

fetch(fishHavenForecastURL)
  .then(response => response.json())
  .then(weatherinfo => {
    //console.log(weatherinfo);

    let myList = weatherinfo.list;

    let forecastToday = todayNumber;

    for (let i = 0; i < myList.length; i++) {
      let time = myList[i].dt_txt;

      if (time.includes("18:00:00")) {
        
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

        document.querySelector('.forecastfish').appendChild(dayCard);
      }
    }
  });

    /*************************** Soda Spring Weather Summary Section **************************************/

const sodaId = 5607916;

const sodaURL = `//api.openweathermap.org/data/2.5/weather?id=${sodaId}&appid=${appId}&units=imperial`;

fetch(sodaURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.querySelector('#weatherSoda').textContent = jsObject.weather[0].description.toUpperCase();
    document.querySelector('#temperatureSoda').textContent = jsObject.main.temp_max.toFixed(0);
    document.querySelector('#humiditySoda').textContent = jsObject.main.humidity;
    document.querySelector('#windspeedSoda').textContent = jsObject.wind.speed.toFixed(0);

    let t = jsObject.main.temp_max;
    let s = jsObject.wind.speed;
    let wc = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    let roundWC = Math.round(wc);
  
    if (s > 3 && t <= 50) {
      document.querySelector('#windchillSoda').textContent = roundWC + '\xB0F';
    } else {
      document.querySelector('#windchillSoda').textContent = "N/A";
    }
  });

   /************************************** Fish Haven Forecast Section ********************************/

const sodaForecastURL = `//api.openweathermap.org/data/2.5/forecast?id=${sodaId}&appid=${appId}&units=imperial`;

fetch(sodaForecastURL)
  .then(response => response.json())
  .then(weatherinfo => {
    //console.log(weatherinfo);

    let myList = weatherinfo.list;

    let forecastToday = todayNumber;

    for (let i = 0; i < myList.length; i++) {
      let time = myList[i].dt_txt;

      if (time.includes("18:00:00")) {
        
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

        document.querySelector('.forecastsoda').appendChild(dayCard);
      }
    }
  }); 