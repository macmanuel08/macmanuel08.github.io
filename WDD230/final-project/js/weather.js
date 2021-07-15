const apiKey = '4c6ee178fbcaa341e556052daf49c4ef';
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=16.0433&lon=120.3333&exclude=minutely,hourly&appid=${apiKey}&units=metric`;

const todayDate = new Date();
const todayNumber = todayDate.getDay();
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

fetch(url)
  .then((response) => response.json())
  .then((weatherInfo) => {
    
    const weather = weatherInfo.current.weather[0].description.replace(
      /(^\w{1})|(\s+\w{1})/g,
      (letter) => letter.toUpperCase()
    );

    document.querySelector('.temperature').innerHTML = `${weatherInfo.current.temp.toFixed(0)}\xB0C`;
    document.querySelector('.condition').innerHTML = weather;
    document.querySelector('.humidity').innerHTML = `${weatherInfo.current.humidity}%`;

    let forecastList = weatherInfo.daily;

    let forecastToday = todayNumber;

    for (let i = 0; i < 3; i++) {

        forecastToday += 1;

        if (forecastToday === 7) {forecastToday = 0;}

        let dayName = document.createElement('h4');
        dayName.setAttribute('class', 'forecastheader');
        dayName.textContent = weekday[forecastToday];

        let temp = document.createElement('span');
        temp.setAttribute('class', 'forecast-temperature');
        temp.textContent = `${forecastList[i].temp.day.toFixed(0)}\xB0C`;

        let dayCard = document.createElement('div');
        dayCard.setAttribute('class', 'weathercard');
        dayCard.appendChild(dayName);
        dayCard.appendChild(temp);

        document.querySelector('.forecast').appendChild(dayCard);
    }

    if (weatherInfo.hasOwnProperty('alerts')) {
      const alert = document.querySelector('.alerts');

      let alertcontainer = document.createElement('div');
      let deletebutton = document.createElement('button');

      deletebutton.textContent = '✕';

      alertcontainer.innerHTML = weatherInfo.alerts.description;
      alertcontainer.append(deletebutton);

      deletebutton.addEventListener('click', () => {
        alert.removeChild(alertcontainer);
      });

      alert.append(alertcontainer);
    }

  });