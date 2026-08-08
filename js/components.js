const siteShell = document.querySelector('#site-shell');

if (siteShell) {
    siteShell.innerHTML = `
        <header>
            <div class="logo">
                <a href="/devmayuree/">
                    <img
                        src="/devmayuree/img/devmayuree-logo.png"
                        alt="DevMayuree Logo">
                </a>
            </div>

            <div class="nav-social">
                <a
                    href="https://www.linkedin.com/in/mayuree-reunsati"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">

                    <i class="fa-brands fa-linkedin"></i>
                </a>

                <a
                    href="https://github.com/mareerray"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub">

                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </header>


        <button
            class="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded="false"
            aria-controls="primary-navigation">

            <span class="hamburger"></span>
        </button>


        <nav
            class="nav"
            id="primary-navigation"
            aria-label="Primary navigation">

            <ul class="nav__list">
                <li class="nav__item">
                    <a
                        href="/devmayuree/#home"
                        class="nav__link">
                        Home
                    </a>
                </li>

                <li class="nav__item">
                    <a
                        href="/devmayuree/#services"
                        class="nav__link">
                        My Services
                    </a>
                </li>

                <li class="nav__item">
                    <a
                        href="/devmayuree/#about"
                        class="nav__link">
                        About me
                    </a>
                </li>

                <li class="nav__item">
                    <a
                        href="/devmayuree/#work"
                        class="nav__link">
                        Selected Work
                    </a>
                </li>
            </ul>
        </nav>
    `;


    const navToggle =
        siteShell.querySelector('.nav-toggle');

    const navLinks =
        siteShell.querySelectorAll('.nav__link');


    navToggle.addEventListener('click', () => {
        const isOpen =
            document.body.classList.toggle('nav-open');

        navToggle.setAttribute(
            'aria-expanded',
            String(isOpen)
        );
    });


    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');

            navToggle.setAttribute(
                'aria-expanded',
                'false'
            );
        });
    });
}