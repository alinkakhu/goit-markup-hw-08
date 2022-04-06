(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    if (
      mobileMenuRef.classList.contains('is-open')){
      menuBtnRef.style.position = 'fixed';
      menuBtnRef.style.right = '20px';
      menuBtnRef.style.top = '15x';
      }
    else{
      menuBtnRef.style.position = 'absolute';
        menuBtnRef.style.right = '0';
      menuBtnRef.style.top = '1';
      }
  });
})();
