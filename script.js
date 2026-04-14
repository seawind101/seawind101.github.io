// Small interactivity for the portfolio template
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const emailLink = document.getElementById('email-link');

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const message = form.elements['message'].value.trim();
      if(!name || !email || !message){
        status.textContent = 'Please complete all fields.';
        status.style.color = 'red';
        return;
      }
      // For this static template we just show a success message.
      status.style.color = 'green';
      status.textContent = 'Thanks! Your message was recorded locally. Replace with your form handler.';
      form.reset();
      setTimeout(()=> status.textContent = '', 6000);
    });
  }

  // If you want the email link updated programmatically, change the address here
  if(emailLink){
    // emailLink.href = 'mailto:you@domain.com';
  }
});
