console.log('This is working');

// HEADER FUNCTIONALITY

const links = document.querySelectorAll('.links');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const anchor = link.querySelector('a');
    const targetId = anchor.getAttribute('href');
    const targetSelection = document.querySelector(targetId);
    if(targetSelection) {
      targetSelection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// HERO SECTION FUNCTIONALITY

const heroBtn = document.querySelector('button');

heroBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const portfolioSelection = document.getElementById('project-section');
  if(portfolioSelection) {
    portfolioSelection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});


// PROJECTS FUNCTIONALITY

const projects = document.querySelector('.projects-content');
const images = document.querySelectorAll('.images');

images.forEach((image) => {
  image.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Image clicked');
    if(image.classList.contains('nr-project')) {
      generateNR();
    } else if(image.classList.contains('meal-plan')) {
      generateWeightTracker();
    }
  })
});

const sideContentContainer = document.createElement('div');
sideContentContainer.classList.add('side-container');
const exit = document.createElement('img');
exit.classList.add('exit-icon');
exit.src = 'img/exit.png';
sideContentContainer.append(exit);

function generateNR() {
    const title = document.createElement('h2');
    title.classList.add('side-title');
    title.textContent = 'Nuevo Remanente Website';
    const nrDescription = document.createElement('p');
    nrDescription.classList.add('description');
    nrDescription.textContent = 'This website was made for a local church in order to have place online where new visitors can learn more about their church. The tech stack that was used includes HTML5, CSS3, JavaScript, and EmailJS. Site includes an animated menu where users can navigate to other pages. Pages inlude: About Page, Service Information Page, and a contact page where users can send requests via EmailJS.';
    const nrBtn = document.createElement('button');
    nrBtn.classList.add('side-btn');
    nrBtn.textContent = 'Visit Page';
    sideContentContainer.append(title, nrDescription, nrBtn);
    projects.append(sideContentContainer);

    requestAnimationFrame(() => {
      sideContentContainer.classList.add('active');
    });

    exit.addEventListener('click', (e) => {
      e.preventDefault();
      requestAnimationFrame(() => {
        sideContentContainer.classList.remove('active');
        title.textContent = '';
        nrDescription.textContent = '';
      });
    });
}

function generateWeightTracker() {
  const title = document.createElement('h2');
  title.classList.add('side-title');
  title.textContent = 'Meal Plan';
  const mealPlanDescription = document.createElement('p');
  mealPlanDescription.classList.add('description');
  mealPlanDescription.textContent = 'This project is meant to be a simple version of a calorie calculator. Users are asked a series of questions: name, age, height, weight, etc. Once information is submitted, a new page is created organizing their data. The calories needed to achieve their goal is displayed along with some food recommendations. This project relied heavily on JavaScript to generate the majority of the content displayed, but HTML5 and CSS3 were still used.';
  const mealBtn = document.createElement('button');
  mealBtn.classList.add('side-btn');
  mealBtn.textContent = 'Visit Page';
  sideContentContainer.append(title, mealPlanDescription, mealBtn);
  projects.append(sideContentContainer);

  requestAnimationFrame(() => {
    sideContentContainer.classList.add('active');
  });

  exit.addEventListener('click', (e) => {
    e.preventDefault();
    requestAnimationFrame(() => {
      sideContentContainer.classList.remove('active');
      title.textContent = '';
      mealPlanDescription.textContent = '';
    });
  });
}

function generateKeys() {
  const title = document.createElement('h2');
  title.classList.add('side-title');
  title.textContent = 'The Keys';
  const keysDescription = document.createElement('p');
  keysDescription.classList.add('description');
  keysDescription.textContent = 'This project is an example landing page for an E-commerce business that sells keyboards.';
}