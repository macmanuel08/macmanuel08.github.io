const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);

        const towns = jsonObject['towns'];

        const needTowns = towns.filter(town => town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven');
        // console.table(needTowns);

        const eventPreston = document.querySelector('#eventPreston');
        const preston = "Preston";
 
        needTowns.forEach(town => {

          if (town.name == preston) {
            for (let i = 0; i < town.events.length; i++) {
              let ep = document.createElement('p');

              ep.textContent = town.events[i];
              eventPreston.appendChild(ep);
            }
          }

          
        });
    });

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);

        const towns = jsonObject['towns'];

        const needTowns = towns.filter(town => town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven');

        const eventSoda = document.querySelector('#eventSoda');

        const soda = "Soda Springs";
        
        needTowns.forEach(town => {

          if (town.name == soda) {
            for (let i = 0; i < town.events.length; i++) {
              let es = document.createElement('p');

              es.textContent = town.events[i];
              eventSoda.appendChild(es);
            }
          }

          
        });
    });

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);

        const towns = jsonObject['towns'];

        const needTowns = towns.filter(town => town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven');

        const eventFish = document.querySelector('#eventFish');

        const fish = "Fish Haven";
        
        needTowns.forEach(town => {

          if (town.name == fish) {
            for (let i = 0; i < town.events.length; i++) {
              let ef = document.createElement('p');

              ef.textContent = town.events[i];
              eventFish.appendChild(ef);
            }
          }

          
        });
    });