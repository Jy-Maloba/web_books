var canvas = document.querySelector("#canvas"), // reference the canvas element by its ID and store it in a variable
    ctx = canvas.getContext("2d"), // To enable canvas' 2D rendering context on the canvas element(allows to draw in 2D on the canvas)
    width=1152, //set the canvas width to 1152 pixels
    height=704,
    player = {
        screen: 15,//15 = START SCREEN
    },
    press_s = {width:500, height:40, f:100},
    instruct = {x:126, y:300, w:900, h:57, f:103};