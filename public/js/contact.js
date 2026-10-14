// Contact page: submit the form to Formspree via fetch and show the success state.

const form = document.getElementById('contactForm');
const successState = document.getElementById('successState');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.style.display = 'none';
      successState.classList.add('visible');
      successState.focus();
      return;
    }
  } catch (err) {
    // fall through to the error message below
  }
  submitBtn.textContent = 'Something went wrong — try again';
  submitBtn.disabled = false;
});
