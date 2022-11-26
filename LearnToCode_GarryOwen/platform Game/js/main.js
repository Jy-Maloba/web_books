canvas.width=width; //bring in the initial setting canvas width from our assets file
canvas.height = height; //bring in the initial setting canvas height from our assets file

function update() { // Main screen update function
    ctx.clearRect(0,0, width, height); //clear the canvas
    ctx.fillStyle = "#333"; //fill the canvas with dark gray color
    ctx.beginPath(); //begin/reset current path

    if (player.screen === 15){drawMyMap1000();} //draw the title screen
    if(player.screen === 1){drawMyMap();} // draw the first game screen
    requestAnimationFrame(update); //animate the current screen
} //close update function

window.addEventListener("load", function(){ //when web page has loaded
    update(); //call the update function
});
document.body.addEventListener("keydown", function(e){ //listen for keydown events and get relevant keycode
    keys[e.keyCode] = false;
});
document.body.addEventListener("keyup", function (e){ //listen for keyup events and get relevant keycode
    keys[e.keyCode] = false;
});