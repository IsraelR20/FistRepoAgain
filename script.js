// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active nav link on scroll
var sections = document.querySelectorAll('main section[id]');

var scrollTimer = null;
function updateActiveNav() {
  var scrollY = window.scrollY;
  sections.forEach(function (section) {
    var top = section.offsetTop - 80;
    var bottom = top + section.offsetHeight;
    var id = section.getAttribute('id');
    var link = document.querySelector('nav a[href="#' + id + '"]');
    if (link) {
      if (scrollY >= top && scrollY < bottom) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', function () {
  if (scrollTimer) return;
  scrollTimer = setTimeout(function () {
    scrollTimer = null;
    updateActiveNav();
  }, 100);
});
updateActiveNav();

// Contact form: show success message on submit
var form = document.querySelector('#contact form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();
    var msg = document.createElement('p');
    msg.textContent = '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.';
    msg.style.color = '#27ae60';
    msg.style.marginTop = '1rem';
    msg.style.fontWeight = '600';
    var existing = form.querySelector('.success-msg');
    if (existing) existing.remove();
    msg.classList.add('success-msg');
    form.appendChild(msg);
    setTimeout(function () { msg.remove(); }, 5000);
  });
}
