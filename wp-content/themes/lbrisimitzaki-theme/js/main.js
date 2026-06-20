document.addEventListener('DOMContentLoaded', function () {
  // Back to Top Button Logic
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  const form = document.getElementById('lbrisimitzaki-contact-form');
  const responseMessage = document.getElementById('contact-response-message');

  if (!form || typeof lbTheme === 'undefined') {
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;
    submitBtn.disabled = true;
    submitBtn.innerText = lbTheme.i18n.sending;

    setTimeout(function () {
      responseMessage.style.display = 'block';
      responseMessage.style.color = '#22c55e';
      responseMessage.innerText = lbTheme.i18n.success;
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerText = originalBtnText;
    }, 1000);
  });
});
