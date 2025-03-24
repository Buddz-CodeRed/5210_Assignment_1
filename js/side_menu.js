// set width for the side nav when open

function openNav() {
    document.getElementById('mySideNav').style.width = '25rem';
    document.getElementById('myNav-ani').style.marginLeft = '25rem';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

// set width for the side nav when close
function closeNav() {
    document.getElementById('mySideNav').style.width = '0';
    document.getElementById('myNav-ani').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
}

// Reset state on page load
window.addEventListener('DOMContentLoaded', () => {
    closeNav();
});