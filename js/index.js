/* Navigation Menu */
let menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener('click', toggleNav);

function toggleNav() {
  /* Menu Button Animation */
  let updateElement = document.getElementById("menu-icon"); //toggle adds a class if it's not there or removes it if it is.
  updateElement.classList.toggle("open");

  /* Toggle Navigation Menu */
  document.getElementById("navigation").classList.toggle("display");
}

/* Slide In Animation Using Intersection Observer */

const contents = document.querySelectorAll('#about > *');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

contents.forEach(content => observer.observe(content));


/* Projects DOM */

fetch("js/projects.json")
.then(response => response.json())
.then(jsonObject => {
    const projects = jsonObject['projects'];

    projects.forEach(project => {
        const div = document.createElement('div');
        const divicon = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('h4');
        const description = document.createElement('p');
        const btn = document.createElement('div');
        const a = document.createElement('a');

        img.src = project.icon;
        img.classList.add('icon');
        img.setAttribute('alt', project.iconName);
        img.setAttribute('loading', 'lazy');
        divicon.append(img);
        divicon.classList.add('divicon');

        title.textContent = project.name;
        description.textContent = project.description;
        description.classList.add('description');

        a.setAttribute('href', project.link);
        a.setAttribute('target', '_blank');
        a.append('Take A Look')
        btn.append(a);
        btn.classList.add('link-btn');

        div.append(divicon);
        div.append(title);
        div.append(description);
        div.append(btn);
        div.classList.add('project-card');

        document.querySelector('.projects-container').append(div);
    });
});


/* FORM */

// function submit() {
//     document.querySelector('.message-status').innerHTML = 'Message Sent!';

//     return true;
// }