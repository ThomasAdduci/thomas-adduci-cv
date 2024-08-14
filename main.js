window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolling');
    } else {
      navbar.classList.remove('scrolling');
    }
});

const navbarHeight = document.getElementById('navbar').offsetHeight;
const additionalMargin = 20;
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const targetOffset = targetSection.offsetTop - navbarHeight - additionalMargin;
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const target = document.getElementById('dynamic-text');
  const texts = ["FrontEnd Angular Developer", "Angular, Typescript, SQL."];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const calculator = document.createElement('span');
  calculator.id = 'text-width-calculator';
  calculator.style.visibility = 'hidden';
  calculator.style.position = 'absolute';
  document.body.appendChild(calculator);

  function updateContainerWidth() {
    const longestText = texts.reduce((a, b) => a.length > b.length ? a : b);
    calculator.innerText = longestText;
  }

  updateContainerWidth();

  function type() {
    const currentText = texts[textIndex];
    let displayText = currentText.substring(0, charIndex);

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    target.innerText = displayText;

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
  }

  type();
});

const experienceData = [
  {
    title: "Desarrollador Frontend",
    subtitle: "Tibó Tecnología | 04/2022 - Actualidad",
    description: "Led a team of developers in building scalable web applications using React and Node.js.",
  },
  {
    title: "Desarrollador Web",
    subtitle: "Freelance | 12/2021 - 04/2022",
    description: "Contributed to the development of a web application based on Angular and NestJS, which functions as a B2B marketplace for fresh food merchants.",
  }
];

const container = document.getElementById("experience-cards-container");

experienceData.forEach((experience) => {
  const card = document.createElement("div");
  card.classList.add("black-card");

  card.innerHTML = `
    <div class="experience-card-container">
      <div>
        <p class="title">${experience.title}</p>
        <p class="subtitle">${experience.subtitle}</p>
        <p class="date">${experience.description}</p>
      </div>
      <div class="more-experience-info-container">
        <p>+ Más info...</p>
      </div>
    </div>
  `;

  container.appendChild(card);
});

const imageSources = [
  "./assets/icons/html.png",
  "./assets/icons/css.png",
  "./assets/icons/javascript.png",
  "./assets/icons/angular.png",
  "./assets/icons/typescript.png",
  "./assets/icons/mysql.png",
  "./assets/icons/angular-material.png",
  "./assets/icons/bootstrap.png",
  "./assets/icons/tailwind.png",
  "./assets/icons/git.png",
  "./assets/icons/java.png",
  "./assets/icons/github.png",
];

const skillsContainer = document.querySelector('.skills-container');

imageSources.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Skill Image";
  skillsContainer.appendChild(img);
});
