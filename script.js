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

// Form ko default 'mailto:' kholne ya page reload karne se rokne ke liye
const enquiryForm = document.querySelector('.enquiry-form');
if (enquiryForm) {
  enquiryForm.removeAttribute('action');
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

// Aapka Google Sheet Apps Script Web App URL:
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbz9zCgNel1SFIceOjDVEJOGe1027GpZPrNwVnbkmcQckCZHVvfxFmQEAsuTFXTfLx6DGQ/exec';

async function validateFormClick() {
  const nameField = document.getElementById('name').value.trim();
  const companyField = document.getElementById('company').value.trim();
  const emailField = document.getElementById('email').value.trim();
  const phoneField = document.getElementById('phone').value.trim();
  const airflowField = document.getElementById('airflow').value.trim();
  const projectTypeField = document.getElementById('project-type').value.trim();
  const messageField = document.getElementById('message').value.trim();
  const submitBtn = document.getElementById('btnSubmit');

  // Basic validation taaki khali form submit na ho
  if (!nameField || !emailField || !phoneField) {
    alert('Please fill in your Name, Email, and Phone number.');
    return;
  }

  const formData = {
    name: nameField,
    company: companyField,
    email: emailField,
    phone: phoneField,
    airflow: airflowField,
    projectType: projectTypeField,
    message: messageField
  };

  try {
    if (submitBtn) {
      submitBtn.innerText = 'Submitting...';
      submitBtn.disabled = true;
    }

    await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(formData)
    });

    alert('Enquiry submitted successfully!');
    if (enquiryForm) {
      enquiryForm.reset();
    }
  } catch (error) {
    console.error('Google Sheet Error:', error);
    alert('Failed to send enquiry. Please try again.');
  } finally {
    if (submitBtn) {
      submitBtn.innerText = 'Submit Enquiry';
      submitBtn.disabled = false;
    }
  }
}