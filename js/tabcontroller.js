const projectTabs = document.querySelectorAll('.project-tab');
const projectPanels = document.querySelectorAll('.project-panel');

function activateProjectTab(selectedTab) {
    projectTabs.forEach((tab) => {
        const isActive = tab === selectedTab;

        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
        tab.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    projectPanels.forEach((panel) => {
        const isActive =
            panel.id === selectedTab.getAttribute('aria-controls');

        panel.hidden = !isActive;
    });
}

projectTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        activateProjectTab(tab);
    });
});