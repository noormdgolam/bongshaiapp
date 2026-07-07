document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbarLinks = document.querySelector('.navbar-links');
  const navbarActions = document.querySelector('.navbar-actions');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isVisible = navbarLinks.style.display === 'flex';
      if (isVisible) {
        navbarLinks.style.display = '';
        navbarActions.style.display = '';
      } else {
        navbarLinks.style.display = 'flex';
        navbarLinks.style.flexDirection = 'column';
        navbarLinks.style.position = 'absolute';
        navbarLinks.style.top = '100%';
        navbarLinks.style.left = '0';
        navbarLinks.style.width = '100%';
        navbarLinks.style.background = 'var(--bg-elevated)';
        navbarLinks.style.padding = '1rem';
        navbarLinks.style.borderBottom = '1px solid var(--glass-border)';

        navbarActions.style.display = 'flex';
        navbarActions.style.flexDirection = 'column';
        navbarActions.style.position = 'absolute';
        navbarActions.style.top = 'calc(100% + 150px)';
        navbarActions.style.left = '0';
        navbarActions.style.width = '100%';
        navbarActions.style.background = 'var(--bg-elevated)';
        navbarActions.style.padding = '1rem';
        navbarActions.style.borderBottom = '1px solid var(--glass-border)';
      }
    });
  }
});
