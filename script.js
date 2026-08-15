const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const enquiryForm = document.querySelector('.enquiry-form');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');

    if (!nameField.value.trim() || !emailField.value.trim()) {
      event.preventDefault();
      alert('Please add your name and email before submitting the enquiry.');
    }
  });
}
