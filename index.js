// Menu Toggle function
function menuToggle() {
    // Get side menu & toggle a class to make it slide out
    document.querySelector('.side-menu').classList.toggle('side-menu-open')
    // Get top and bottom hamburger lines
    const hiddenLines = document.querySelectorAll('.hide-on-open')
    // Make them disappear when menu is open
    hiddenLines.forEach(div => div.classList.toggle('hidden-on-active'));
}

// Add event listener to menu button
document.querySelector('.menu-toggle')
    .addEventListener('click', menuToggle);