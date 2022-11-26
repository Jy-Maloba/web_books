function drawMyMap1000(){ //open the draw start screen function
    ctx.drawImage(tile[15], 0, 0, 1152, 704); //draw the background image
    if(keys[83]){ //if the user presses ‘s’ to start
        player.screen = 1; //change the screen to map 1
    }
    if(keys[73]){ // if user presses i
        instruct.f = 102; instruct.x = 126, instruct.y = 25, instruct.w = 900, instruct.h = 567; // show the instructions image
    } 
    else { //otherwise
            ctx.drawImage(sprite[104], 383.5, 380, 385, 24);
            instruct.f = 103; instruct.x = 126, instruct.y = 200, instruct.w = 900, instruct.h = 57; //draw the instructions message
            ctx.drawImage(sprite[105], 476, 435, 200, 137); //draw the user controls
            ctx.drawImage(sprite[106], 342, 275, 469, 85); //draw the copyright message
        }
    
    ctx.drawImage(sprite[instruct.f], instruct.x, instruct.y, instruct.w, intsruct.h); //always draw the title - sorceres mountain
    ctx.drawImage(sprite[press_s.f],326, 610, press_s.width, press_s.height); //bring in the initial values for press_s from assets

    if (press_s.f === 100){
        setTimeout(function(){ press_s.f = 101; },200);
    } else{
        setTimeout(function(){press_s.f = 101;},200);
    }
    // make the press_s to start message animate between image 100 and 101 every 0.2 seconds
} //close draw map function