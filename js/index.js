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

/* Slide In */

// Getting all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    //get 'src' attr and set its value to 'data-src' value
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

// optional parameters being set for the IntersectionObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

if ('IntersectionObserver' in window) {
    // if it's supported
    const imgObserver = new IntersectionObserver(items => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    //load images if necessary
    imagesToLoad.forEach(img => {
        imgObserver.observe(img);
    });

} else { //load  all images if not supported
    imagesToLoad.forEach(img => {
        loadImages(img);
    });
}

/* Scroll Nav */

window.onscroll = () => {

    const header = document.querySelector('#header');

    if (window.scrollY >= 52) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}

/* Projects DOM */

fetch("js/projects.json")
.then(response => response.json())
.then(jsonObject => {
    const blogs = jsonObject['blogs'];

    blogs.forEach(blog => {
        const div = document.createElement('div');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const description = document.createElement('p');
        const title = document.createElement('h3');

        a.setAttribute('href', blog.link);
        a.setAttribute('target', '_blank');

        img.src = blog.image;
        img.classList.add('blogimg');
        img.setAttribute('alt', `${blog.title} Cover Photo`);
        img.setAttribute('loading', 'lazy');

        title.textContent = blog.title;
        description.textContent = blog.intro;

        a.append(img);
        a.append(title);
        a.append(description);
        div.append(a);

        document.querySelector('.blog-container').append(div);
    });
});


/* FORM */

function submit() {
    document.querySelector('.message-status').innerHTML = 'Message Sent!';

    return true;
}