const navLinks = document.getElementById('navLinks');

function menuToggle()
{
    const style = window.getComputedStyle(navLinks),
        transform = style.transform || style.webkitTransform || style.mozTransform;
    let tMatrix = transform.match(/^matrix3d\((.+)\)$/);
    tMatrix = transform.match(/^matrix\((.+)\)$/);
    tValue = tMatrix ? parseFloat(tMatrix[1].split(', ')[5]) : 0;

    if (tValue != 0) { // Menu is HIDDEN rn
        navLinks.style.transform = "translate(-50%, 0)";
        navLinks.style.opacity = 1;
    }   
    else { // Menu is DISPLAYED rn
        navLinks.style.transform = "translate(-50%, -350px)";
        navLinks.style.opacity = 0;
    }
}