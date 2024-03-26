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
