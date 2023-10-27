import _vars from "../_vars";

document.querySelectorAll('.password-label').forEach((item) => {
  const input = item.querySelector('input');
  const showBtn = item.querySelector('.show-pass');

  showBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const isPassword = input.getAttribute('type') === 'password';

    showBtn.classList.toggle('view', !isPassword);
    input.setAttribute('type', isPassword ? 'text' : 'password');
  });
});


