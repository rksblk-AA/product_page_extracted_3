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
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validateFormClick();
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
}// --- AiroTake AI Chat Logic ---
const chatInput = document.getElementById('chat-user-input');
const chatSendBtn = document.getElementById('chat-send-btn');
const chatBody = document.querySelector('.chat-body');

function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.style.margin = '8px 0';
  msgDiv.style.padding = '8px 12px';
  msgDiv.style.borderRadius = '8px';
  msgDiv.style.fontSize = '13px';
  
  if (sender === 'user') {
    msgDiv.style.background = '#0c2946';
    msgDiv.style.color = '#fff';
    msgDiv.style.textAlign = 'right';
    msgDiv.style.marginLeft = '20%';
  } else {
    msgDiv.style.background = '#e2e8f0';
    msgDiv.style.color = '#1e293b';
    msgDiv.style.marginRight = '20%';
  }
  
  msgDiv.textContent = text;
  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function handleUserMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  // User message display karein
  addMessage('user', text);
  chatInput.value = '';

  // Simple Smart Bot Automated Responses for AiroTake
  setTimeout(() => {
    let reply = "Thanks for reaching out to AiroTake! For quick assistance, please call us at +91 6302 104 702 or fill out the enquiry form below.";
    
    const lowerText = text.toLowerCase();
    if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('quote')) {
      reply = "Our ESP prices depend on the required Air Volume (CMH) model (from AESP 35 to AESP 420). Please fill out the Quote form on our website or call +91 6302 104 702.";
    } else if (lowerText.includes('spec') || lowerText.includes('model') || lowerText.includes('cmh')) {
      reply = "We offer various models like AESP 35 (3000-4000 CMH) up to AESP 420 (41500-42500 CMH). Check our 'Technical Specification' section for full details!";
    } else if (lowerText.includes('hello') || lowerText.includes('hi')) {
      reply = "Hello! Welcome to AiroTake. How can I help you with our Commercial Kitchen Electrostatic Precipitators today?";
    }

    addMessage('bot', reply);
  }, 600);
}

if (chatSendBtn && chatInput) {
  chatSendBtn.addEventListener('click', handleUserMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleUserMessage();
    }
  });
}