// Thanks to the below resources in getting this working.
// https://radu-matei.com/blog/dark-mode/
// https://gist.github.com/jerrylususu/c517f091f3d733cf28e29e55b77b50d5

var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

// Probe system default dark mode setting
var systemDefault = null
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    systemDefault = "dark";
} else {
    systemDefault = "light";
}

// Use user preference if possible
var savedTheme = localStorage.getItem("dark-mode-storage") || systemDefault;
setTheme(savedTheme);

toggle.addEventListener("click", () => {
    if (toggle.className === "fa-solid fa-moon") {
        setTheme("dark");
    } else if (toggle.className === "fa-solid fa-sun") {
        setTheme("light");
    }

});

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);

    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "fa-solid fa-sun";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "fa-solid fa-moon";
    }
} 