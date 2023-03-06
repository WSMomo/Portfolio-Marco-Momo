//hamburger menu transform
function hamburger(x) {
  if (!x.classList.contains('disabled')) {
    x.classList.add('disabled');
    x.classList.toggle("change");
    setTimeout(function() {
      x.classList.remove('disabled');
    }, 400);
  }
}




//collapse navbar after clicking a link
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarLink')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { 
      bsCollapse.toggle();
      hamburger(document.querySelector('.hamburger-menu'));
    });
});




