document.addEventListener("DOMContentLoaded", function() {
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');
    const navClose = document.querySelector('.nav-close');

    navToggler.addEventListener('click', function() {
        aside.classList.toggle('active');
        navClose.classList.toggle('hidden'); 
    });

    navClose.addEventListener('click', function() {
        aside.classList.remove('active'); 
        navClose.classList.add('hidden'); 
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const themeToggler = document.querySelector('.theme-toggler');
    const lightModeIcon = document.getElementById('light-mode-icon');
    const darkModeIcon = document.getElementById('dark-mode-icon');

   
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            lightModeIcon.classList.add('hidden');
            darkModeIcon.classList.remove('hidden');
        }
    }

    themeToggler.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        
        lightModeIcon.classList.toggle('hidden');
        darkModeIcon.classList.toggle('hidden');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
function validateForm() {
    const fields = ['name', 'email', 'subject', 'message'];
    fields.forEach(field => {
        const input = document.getElementById(field);
        const errorMessage = input.nextElementSibling;
        if (!input.value) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    });
}




