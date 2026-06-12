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
    generateNR();
  })
});

function generateNR() {
    const sideContentContainer = document.createElement('div');
    sideContentContainer.classList.add('side-container');
    const exit = document.createElement('img');
    exit.classList.add('exit-icon');
    exit.src = 'img/exit.png';
    const title = document.createElement('h2');
    title.classList.add('nr-side-title');
    title.textContent = 'Nuevo Remanente Website';
    const nrDescription = document.createElement('p');
    nrDescription.classList.add('nr-description');
    nrDescription.textContent = 'This website was made for a local church in order to have place online where new visitors can learn more about their church.'
    sideContentContainer.append(exit, title, nrDescription);
    projects.append(sideContentContainer);

    requestAnimationFrame(() => {
      sideContentContainer.classList.add('active');
    });

    exit.addEventListener('click', (e) => {
      requestAnimationFrame(() => {
        sideContentContainer.classList.remove('active');
      });
    });
}