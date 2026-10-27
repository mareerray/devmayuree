(() => {
    const shell = document.querySelector('#site-shell');
    if (!shell) return;
    shell.innerHTML = `
      <header class="site-header">
        <div class="site-header__inner">
          <a class="site-brand" href="index.html" aria-label="Mayuree — home">
            <img src="img/devmayuree-logo.png" alt="" width="43" height="43">
            <span class="site-brand__name">mayuree<span>.</span></span>
          </a>
          <button class="site-menu-toggle" type="button" aria-expanded="false"
            aria-controls="primary-navigation" hidden>Menu</button>
          <nav class="site-nav" id="primary-navigation" aria-label="Primary navigation">
            <a href="index.html#work">Work</a>
            <a href="index.html#about">About</a>
            <a href="index.html#services">Skills</a>
            <a href="index.html#contact">Say hello ↗</a>
          </nav>
        </div>
      </header>`;
    const toggle = shell.querySelector('.site-menu-toggle');
    const nav = shell.querySelector('.site-nav');
    const mobile = window.matchMedia('(max-width: 700px)');
    function setOpen(open) {
        nav.hidden = mobile.matches && !open;
        toggle.setAttribute('aria-expanded', String(open));
        toggle.textContent = open ? 'Close' : 'Menu';
    }
    function sync() {
        toggle.hidden = !mobile.matches;
        setOpen(false);
    }
    toggle.addEventListener('click', () => {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', (event) => {
        if (event.target.closest('a') && mobile.matches) setOpen(false);
    });
    shell.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobile.matches && !nav.hidden) {
            setOpen(false);
            toggle.focus();
        }
    });
    mobile.addEventListener('change', sync);
    sync();
})();
