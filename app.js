// we declare a new global variable containing an array that represents the ballons map
let ballonsMap = ['red', 'pink', 'green', 'gray', 'maroon', 'black', 'pink', 'teal', 'fuchsia', 'yellow', 'black', 'pink', 'green', 'aqua', 'yellow', 'red', 'pink', 'green', 'gray', 'yellow'];
let activeBalloons = 20;

// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    // set the color to null on the balloon position
    ballonsMap[position] = null;
    var balloonsArray = document.querySelectorAll(".balloon");
    balloonsArray[position].style.visibility = "hidden"; 
    activeBalloons = activeBalloons - 1;
    document.querySelector("#balloon-count").innerHTML = activeBalloons;
    if(activeBalloons == 0) window.location.reload();
}

const render = () => {
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        var colorChanger =  ballonsMap[position];

       return `<div class="balloon active" onclick="popBalloon(${position})" style="background-color:${colorChanger};"></div>`;
    })
    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- rende the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM
    
    if(activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();