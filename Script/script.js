const openBtn = document.querySelector('#menuBtn');
const closeBtn = document.querySelector('#closeBtn');
const mobMenu = document.querySelector('#mob-navigation');
const multiPostProjectCard = document.querySelector('.multi-post-stories');
const projectContainer = document.querySelector('.prof-art-container');
const body = document.querySelector('body');

function createOpenClass(element, className) {
  element.classList.add(className);
}
function createCloseClass(element, className) {
  element.classList.remove(className);
}

openBtn.addEventListener('click', () => createOpenClass(mobMenu, 'menu-open'));
closeBtn.addEventListener('click', () => createCloseClass(mobMenu, 'menu-open'));

const navBtns = document.querySelectorAll('.nav-btn');
navBtns.forEach((button) => {
  button.addEventListener('click', () => createCloseClass(mobMenu, 'menu-open'));
});

const projectMultipost = {
  name: 'Multi-Post Stories',
  image: 'Assets/images/background/works-images/multi-art-section-img.svg',
  desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  techs: ['html', 'bootstrap', 'Ruby'],
};

const profArtProject = {
  name: 'Professional Art Printing Data',
  image: 'Assets/images/background/works-background/desctop-prof-art-bg.png',
  desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  techs: ['html', 'bootstrap', 'Ruby'],

};

const projectList = [
  {
    name: 'Data Dashboard Healthcares',
    image: 'Assets/images/background/works-background/desktop-prof-art-bg2.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    techs: ['html', 'bootstrap', 'Ruby'],
  },
  {
    name: 'Website Protfolio',
    image: 'Assets/images/background/works-background/desktop-prof-art-bg3.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    techs: ['CSS', 'html', 'bootstrap', 'Ruby'],
  },
  {
    name: 'Professional Art Printing Data',
    image: 'Assets/images/background/works-background/desctop-prof-art-bg.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    techs: ['html', 'bootstrap', 'Ruby'],
  },
  {
    name: 'Data Dashboard Healthcares',
    image: 'Assets/images/background/works-background/desktop-prof-art-bg2.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    techs: ['html', 'bootstrap', 'Ruby'],
  },
  {
    name: 'Website Protfolio',
    image: 'Assets/images/background/works-background/desktop-prof-art-bg3.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    techs: ['CSS', 'html', 'bootstrap', 'Ruby'],
  },

];

projectContainer.innerHTML = `
 <section class="prof-art main-prof-art">
  <h2>${profArtProject.name}</h2>
  <p>${profArtProject.desc}</p>
  <nav class="prof-art-navigation">
   <ul class="flex-container">
    <li>
     <a href="#">${profArtProject.techs[0]}</a>
     </li>
     <li>
     <a href="#">${profArtProject.techs[1]}</a>
     </li>
     <li>
      <a href="#">${profArtProject.techs[2]}</a>
     </li>
    </ul>
  </nav>
  <button type="button" id="profArtMainBtn" class="prof-art-btn">See Project</button>
 </section>`;

multiPostProjectCard.innerHTML = `
<img src=${projectMultipost.image} alt="Gymfit project">
<h2>${projectMultipost.name}</h2>
<p>${projectMultipost.desc}</p>
<nav class="multi-post-navigation">
  <ul class="flex-container">
    <li>
      <a href="#">${projectMultipost.techs[0]}</a>
    </li>
    <li>
      <a href="#">${projectMultipost.techs[1]}</a>
    </li>
    <li>
      <a href="#">${projectMultipost.techs[2]}</a>
    </li>
  </ul>
</nav>
<button type="button" id="multiPostBtn" class="multi-post-btn">See Project</button>`;

for (let i = 0; i < projectList.length; i += 1) {
  projectContainer.innerHTML += `
        <section class="prof-art witout-btn">
          <h2>${projectList[i].name}</h2>
          <p>${projectList[i].desc}</p>
          <nav class="prof-art-navigation">
            <ul class="flex-container">
              <li>
                <a href="#">${projectList[i].techs[0]}</a>
              </li>
              <li>
                <a href="#">${projectList[i].techs[1]}</a>
              </li>
              <li>
                <a href="#">${projectList[i].techs[2]}</a>
              </li>
            </ul>
          </nav>
          <button type="button" id= ${i} class="prof-art-btn">See Project</button>
        </section>`;

  document.querySelector('.prof-art').setAttribute('style',
    `background: url(${projectList[i].image}); background-repeat: no-repeat; background-size: cover;`);
}

function createPopUp(element, name, image, techs, desc, live = 'See Live', source = 'See Source') {
  element.innerHTML += `
    <section class="popup-container">
      <div class="popup-content">
        <header class="popup-header">
         <h1 class="popup-heading">${name}</h1>
         <button class="popup-close-btn" id="popupCloseBtn">x</button>
         </header>
         <ul class="popup-list">
           <li>
            <a href="#">${techs[0]}</a>
           </li>
           <li>
             <a href="#">${techs[1]}</a>
           </li>
           <li>
             <a href="#">${techs[2]}</a>
           </li>
         </ul>
         <img src=${image} class="pop-image" alt="project demo">
         <div class="popup-details">
           <p class="popup-desc">${desc}</p>
           <div class="popup-btn-group">
             <a href="#" class="live">${live}</a>
             <a href="#" class="source">${source}</a>
           </div>
         </div>
      </div>
    </section>`;

  document.querySelector('#popupCloseBtn').addEventListener('click', () => {
    body.removeChild(document.querySelector('.popup-container'));
  });

  const multiPostBtn = document.getElementById('multiPostBtn');
  const profArtMainBtn = document.getElementById('profArtMainBtn');
  const profArtBtn0 = document.getElementById('0');
  const profArtBtn1 = document.getElementById('1');
  const profArtBtn2 = document.getElementById('2');
  const profArtBtn3 = document.getElementById('3');
  const profArtBtn4 = document.getElementById('4');

  multiPostBtn.addEventListener('click', () => createPopUp(body, projectMultipost.name, projectMultipost.image, projectMultipost.techs, projectMultipost.desc));
  profArtMainBtn.addEventListener('click', () => createPopUp(body, profArtProject.name, profArtProject.image, profArtProject.techs, profArtProject.desc));
  profArtBtn0.addEventListener('click', () => createPopUp(body, projectList[0].name, projectList[0].image, projectList[0].techs, projectList[0].desc));
  profArtBtn1.addEventListener('click', () => createPopUp(body, projectList[1].name, projectList[1].image, projectList[1].techs, projectList[1].desc));
  profArtBtn2.addEventListener('click', () => createPopUp(body, projectList[2].name, projectList[2].image, projectList[2].techs, projectList[2].desc));
  profArtBtn3.addEventListener('click', () => createPopUp(body, projectList[3].name, projectList[3].image, projectList[3].techs, projectList[3].desc));
  profArtBtn4.addEventListener('click', () => createPopUp(body, projectList[4].name, projectList[4].image, projectList[4].techs, projectList[4].desc));
}

const multiPostBtn = document.getElementById('multiPostBtn');
const profArtMainBtn = document.getElementById('profArtMainBtn');
const profArtBtn0 = document.getElementById('0');
const profArtBtn1 = document.getElementById('1');
const profArtBtn2 = document.getElementById('2');
const profArtBtn3 = document.getElementById('3');
const profArtBtn4 = document.getElementById('4');

multiPostBtn.addEventListener('click', () => createPopUp(body, projectMultipost.name, projectMultipost.image, projectMultipost.techs, projectMultipost.desc));
profArtMainBtn.addEventListener('click', () => createPopUp(body, profArtProject.name, profArtProject.image, profArtProject.techs, profArtProject.desc));
profArtBtn0.addEventListener('click', () => createPopUp(body, projectList[0].name, projectList[0].image, projectList[0].techs, projectList[0].desc));
profArtBtn1.addEventListener('click', () => createPopUp(body, projectList[1].name, projectList[1].image, projectList[1].techs, projectList[1].desc));
profArtBtn2.addEventListener('click', () => createPopUp(body, projectList[2].name, projectList[2].image, projectList[2].techs, projectList[2].desc));
profArtBtn3.addEventListener('click', () => createPopUp(body, projectList[3].name, projectList[3].image, projectList[3].techs, projectList[3].desc));
profArtBtn4.addEventListener('click', () => createPopUp(body, projectList[4].name, projectList[4].image, projectList[4].techs, projectList[4].desc));