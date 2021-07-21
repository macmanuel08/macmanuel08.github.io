
fetch("js/directory.json")
  .then(response => response.json())
  .then(jsonObject => {
      const directory = jsonObject['directory'];

      directory.forEach( company => {
          const companyCard = document.createElement('div');
          const companylogo = document.createElement('img');
          const p = document.createElement('p');
          const companylink = document.createElement('a');

          companylink.innerHTML = company.link;
          companylogo.src = company.logo;
          companylogo.setAttribute('alt', `${company.name} Logo`);
          companylogo.setAttribute('loading', 'lazy');
          p.innerHTML = `${company.name}<br>${company.contact}<br>${company.address}<br>`;
          companylink.setAttribute('href', `${company.link}`);
          companylink.setAttribute('target', '_blank');
          p.append(companylink);

          companyCard.append(companylogo);
          companyCard.append(p);

          companyCard.classList.add('companycard');
          document.querySelector('#directory').append(companyCard);
      });
    });

document.querySelectorAll('.displaybtn').forEach( btn => {
    btn.onclick = () => {
        document.querySelector('#directory').style.display = btn.dataset.display;
    }
});