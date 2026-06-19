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
    const projectContent = document.getElementById('project-content');
    if(projectContent) {
      projectContent.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    console.log('Image clicked');
    if(image.classList.contains('nr-project')) {
      generateNR();
    } else if(image.classList.contains('meal-plan')) {
      generateWeightTracker();
    } else if(image.classList.contains('keyboard')) {
      generateKeys();
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

    while(sideContentContainer.children.length > 1) {
      sideContentContainer.removeChild(sideContentContainer.lastChild);
    }

    const title = document.createElement('h2');
    title.classList.add('side-title');
    title.textContent = 'Nuevo Remanente Website';
    const titleCaption = document.createElement('p');
    titleCaption.classList.add('side-title-caption');
    titleCaption.textContent = 'HTML • CSS • JavaScript • EmailJS';
    const nrDescription = document.createElement('p');
    nrDescription.classList.add('description');
    nrDescription.textContent = 'This website was made for a local church in order to have place online where new visitors can learn more about their church. The tech stack that was used includes HTML5, CSS3, JavaScript, and EmailJS. Site includes an animated menu where users can navigate to other pages. Pages inlude: About Page, Service Information Page, and a contact page where users can send requests via EmailJS.';
    const nrBtn = document.createElement('button');
    nrBtn.classList.add('side-btn');
    nrBtn.textContent = 'Visit Page';
    nrBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://www.nuevoremanente.com/index.html', '_blank');
    });
    const nrGit = document.createElement('button');
    nrGit.classList.add('git-btn');
    nrGit.textContent = 'View Code';
    nrGit.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://github.com/Pianist01/nr-overhaul', '_blank');
    });
    sideContentContainer.append(title, titleCaption, nrDescription, nrBtn, nrGit);
    projects.append(sideContentContainer);

    requestAnimationFrame(() => {
      sideContentContainer.classList.add('active');
      title.classList.add('active');
      titleCaption.classList.add('active');
      nrDescription.classList.add('active');
      nrBtn.classList.add('active');
      nrGit.classList.add('active');
    });

    exit.addEventListener('click', (e) => {
      e.preventDefault();
      requestAnimationFrame(() => {
        sideContentContainer.classList.remove('active');
        title.classList.remove('active');
        titleCaption.classList.remove('active');
        nrDescription.classList.remove('active');
        nrBtn.classList.remove('active');
        nrGit.classList.remove('active');
        title.textContent = '';
        nrDescription.textContent = '';
      });
    });
}

function generateWeightTracker() {
  while(sideContentContainer.children.length > 1) {
    sideContentContainer.removeChild(sideContentContainer.lastChild);
  }
  const title = document.createElement('h2');
  title.classList.add('side-title');
  title.textContent = 'Meal Plan';
  const titleCaption = document.createElement('p');
  titleCaption.classList.add('side-title-caption');
  titleCaption.textContent = 'HTML • CSS • JavaScript';
  const mealPlanDescription = document.createElement('p');
  mealPlanDescription.classList.add('description');
  mealPlanDescription.textContent = 'This project is meant to be a simple version of a calorie calculator. Users are asked a series of questions: name, age, height, weight, etc. Once information is submitted, a new page is created organizing their data. The calories needed to achieve their goal is displayed along with some food recommendations. This project relied heavily on JavaScript to generate the majority of the content displayed, but HTML5 and CSS3 were still used.';
  const mealBtn = document.createElement('button');
  mealBtn.classList.add('side-btn');
  mealBtn.textContent = 'Visit Page';
  mealBtn.addEventListener('click', (e) => {
    window.open('https://pianist01.github.io/meal-plan/', '_blank');
  });
  const mealGit = document.createElement('button');
  mealGit.classList.add('git-btn');
  mealGit.textContent = 'View Code';
  mealGit.addEventListener('click', (e) => {
    window.open('https://github.com/Pianist01/meal-plan', '_blank');
  });
  sideContentContainer.append(title, titleCaption, mealPlanDescription, mealBtn, mealGit);
  projects.append(sideContentContainer);

  requestAnimationFrame(() => {
    sideContentContainer.classList.add('active');
    title.classList.add('active');
    titleCaption.classList.add('active');
    mealPlanDescription.classList.add('active');
    mealBtn.classList.add('active');
    mealGit.classList.add('active');
  });

  exit.addEventListener('click', (e) => {
    e.preventDefault();
    requestAnimationFrame(() => {
      sideContentContainer.classList.remove('active');
      title.classList.remove('active');
      titleCaption.classList.remove('active');
      mealPlanDescription.classList.remove('active');
      mealBtn.classList.remove('active');
      mealGit.classList.remove('active');
      title.textContent = '';
      mealPlanDescription.textContent = '';
    });
  });
}

function generateKeys() {
  while(sideContentContainer.children.length > 1) {
    sideContentContainer.removeChild(sideContentContainer.lastChild);
  }
  const title = document.createElement('h2');
  title.classList.add('side-title');
  title.textContent = 'The Keys';
  const titleCaption = document.createElement('p');
  titleCaption.classList.add('side-title-caption');
  titleCaption.textContent = 'HTML • CSS';
  const keysDescription = document.createElement('p');
  keysDescription.classList.add('description');
  keysDescription.textContent = 'This project is an example landing page for an E-commerce business that sells keyboards with 3 sections. The first section of the landing page includes a hero container with brief description of product along with CTA button. The second section allows user to read why product is great, and final section allows users to read a few reviews to further convince them. At the bottom of the page is another CTA button.';
  const keysBtn = document.createElement('button');
  keysBtn.classList.add('side-btn');
  keysBtn.textContent = 'Visit Page';
  keysBtn.addEventListener('click', (e) => {
    window.open('https://pianist01.github.io/keyboard-page/', '_blank');
  });
  const keyGit = document.createElement('button');
  keyGit.classList.add('git-btn');
  keyGit.textContent = 'View Code';
  keyGit.addEventListener('click', (e) => {
    window.open('https://github.com/Pianist01/keyboard-page', '_blank');
  });
  sideContentContainer.append(title, titleCaption, keysDescription, keysBtn, keyGit);
  projects.append(sideContentContainer);

  requestAnimationFrame(() => {
    sideContentContainer.classList.add('active');
    title.classList.add('active');
    titleCaption.classList.add('active');
    keysDescription.classList.add('active');
    keysBtn.classList.add('active');
    keyGit.classList.add('active');
  });

  exit.addEventListener('click', (e) => {
    e.preventDefault();
    requestAnimationFrame(() => {
      sideContentContainer.classList.remove('active');
      title.classList.remove('active');
      titleCaption.classList.remove('active');
      keysDescription.classList.remove('active');
      keysBtn.classList.remove('active');
      keyGit.classList.remove('active');
      title.textContent = '';
      keysDescription.textContent = '';
    });
  });
}