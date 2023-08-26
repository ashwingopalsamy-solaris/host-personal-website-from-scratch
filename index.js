
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme')) {
        setTheme('dark');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (e.matches && !localStorage.getItem('theme')) {
            setTheme('dark');
        } else if (!e.matches && !localStorage.getItem('theme')) {
            setTheme('light');
        }
    });
})();

document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("#navList a");
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('data-path');
      
      if (currentPath.includes(linkPath)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
