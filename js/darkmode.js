const toggle = document.getElementById("theme-toggle");

const storedTheme = localStorage.getItem('theme');
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};
