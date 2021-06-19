const squareElement = document.getElementById("square");
let angle =0;
function rotate()
{
    let delta = 2;
    // Increase the angle every frame.
    // Changing delta affects the speed at which this occurs.
    angle = (angle + delta) % 360;
    squareElement.style.transform = "rotate(" + angle + "deg)"; // Rotate squareElement "angle" degrees away from its default angle.
    window.requestAnimationFrame(rotate); // Run 'rotate' function after each animation frame?
}
const id = rotate();