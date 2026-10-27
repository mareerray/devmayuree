(() => {
    document.querySelectorAll('.project-tabs').forEach((list) => {
        const tabs = [...list.querySelectorAll('.project-tab')];
        if (!tabs.length) return;
        function activate(selected, focus = false) {
            tabs.forEach((tab) => {
                const active = tab === selected;
                tab.classList.toggle('is-active', active);
                tab.setAttribute('aria-selected', String(active));
                tab.tabIndex = active ? 0 : -1;
                const panel = document.getElementById(tab.getAttribute('aria-controls'));
                if (panel) {
                    panel.hidden = !active;
                    panel.classList.toggle('is-active', active);
                }
            });
            if (focus) selected.focus();
        }
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => activate(tab));
            tab.addEventListener('keydown', (event) => {
                let next;
                if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
                if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
                if (event.key === 'Home') next = 0;
                if (event.key === 'End') next = tabs.length - 1;
                if (next !== undefined) {
                    event.preventDefault();
                    activate(tabs[next], true);
                }
            });
        });
        activate(tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0]);
    });
})();
