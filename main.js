document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const htmlTag = document.documentElement;
    const navbarToggler = document.querySelectorAll(".navbar-toggler");
    const navbarCollapse = document.getElementById("navbarNav");

    const theme = getCookie("theme");
    htmlTag.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        navbarToggler.forEach(nav => {
            nav.style.filter = "invert(1)";
        });
    }

    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
    });
    document.querySelectorAll("#navbarNav .nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                bsCollapse.hide();
            }
        });
    });
    document.addEventListener("click", function (event) {
        const navbar = document.querySelector(".navbar");

        if (
            navbarCollapse.classList.contains("show") &&
            !navbar.contains(event.target)
        ) {
            bsCollapse.hide();
        }
    });

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlTag.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlTag.setAttribute('data-theme', newTheme);

        if (newTheme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            navbarToggler.forEach(nav => {
                nav.style.filter = "invert(1)";
            });
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            navbarToggler.forEach(nav => {
                nav.style.filter = "invert(0)";
            });
        }
        setTheme(newTheme);
    });
});

function setTheme(theme) {
    document.cookie = `theme=${theme}; max-age=31536000; path=/`;
}
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return "dark";
}