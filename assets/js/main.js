(() => {
  const button = document.querySelector('[data-nav-toggle]');
  const list = document.querySelector('[data-nav-list]');

  if (!button || !list) return;

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
    list.classList.toggle('is-open');
  });
})();
