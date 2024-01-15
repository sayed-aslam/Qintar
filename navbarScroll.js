window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) { // Adjust the scroll position where you want the effect to start (e.g., 200 pixels)
        navbar.classList.add('bg-opacity-75');
    } else {
        navbar.classList.remove('bg-opacity-75');
    }
});



