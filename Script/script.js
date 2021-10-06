const openBtn = document.querySelector('#menuBtn');
const closeBtn = document.querySelector('#closeBtn');
const mobMenu = document.querySelector('#mob-navigation');
const multiPostProjectCard = document.querySelector('.multi-post-stories');
const projectContainer = document.querySelector('.prof-art-container');

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
  name: "Multi-Post Stories",
  image: "Assets/images/background/works-images/multi-art-section-img.svg",
  desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  techs: ["CSS", "html", "bootstrap", "Ruby"]
};

const profArtProject = {
  name: "Professional Art Printing Data",
  image: "Assets/images/background/works-background/desctop-prof-art-bg.png",
  desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  techs: ["html", "bootstrap", "Ruby"]

}

const projectList = [
  {
    name: "Data Dashboard Healthcares",
    image: "Assets/images/background/works-background/desktop-prof-art-bg2.png",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    techs: ["html", "bootstrap", "Ruby"]
  },
  {
    name: "Website Protfolio",
    image: "Assets/images/background/works-background/desktop-prof-art-bg3.png",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    techs: ["CSS", "html", "bootstrap", "Ruby"]
  },
  {
    name: "Professional Art Printing Data",
    image: "Assets/images/background/works-background/desctop-prof-art-bg.png",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    techs: ["html", "bootstrap", "Ruby"]
  },
  {
    name: "Data Dashboard Healthcares",
    image: "Assets/images/background/works-background/desktop-prof-art-bg2.png",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    techs: ["html", "bootstrap", "Ruby"]
  },
  {
    name: "Website Protfolio",
    image: "Assets/images/background/works-background/desktop-prof-art-bg3.png",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    techs: ["CSS", "html", "bootstrap", "Ruby"]
  }

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
  <button type="button" class="prof-art-btn">See Project</button>
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
    <li>
      <a href="#">${projectMultipost.techs[3]}</a>
    </li>
  </ul>
</nav>
<button type="button" class="multi-post-btn">See Project</button>`;


for (let i = 0; i < projectList.length; i++) {
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
          <button type="button" class="prof-art-btn">See Project</button>
        </section>`

        document.querySelector('.prof-art').setAttribute('style', 
        `background: url(${projectList[i].image}); background-repeat: no-repeat; background-size: cover;`)
};

function createPopUp (name, image, techs, desc, live = 'See Live', source = 'See Source');