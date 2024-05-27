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
  const texts = ["FrontEnd Angular Developer", "Angular, Typescript, React, SQL."];
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
