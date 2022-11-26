function drawMyMap(){ //open the drawmap function
    ctx.drawImage(tile[16], 0, 0); //draw he game screen background - a stone wall

    var xt = 0; // tile x coordinates variable declaration
    var yt = -64; // tile y coordinate variable declaration
    var tileMap = []; // create a new empty array to store the tile map
    var mapNo = 0; // map rows variable declaration

    tileMap[0] = [6, 6, 6, 6, 6, 6, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6];
    tileMap[1] = [6, 0, 0, 0, 10, 0, 0, 11, 0, 0, 10, 0, 6, 0, 0, 0, 0, 0];
    tileMap[2] = [6, 0, 0, 9, 9, 9, 9, 9, 9, 9, 8, 0, 0, 0, 0, 0, 0, 0];
    tileMap[3] = [6, 0, 11, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 9, 9, 0, 6];
    tileMap[4] = [6, 9, 9, 9, 0, 0, 0, 0, 0, 0, 8, 9, 9, 0, 0, 0, 0, 6];
    tileMap[5] = [6, 0, 0, 0, 0, 9, 9, 0, 0, 0, 10, 0, 0, 9, 0, 9, 9, 6];
    tileMap[6] = [6, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 0, 0, 0, 6];
    tileMap[7] = [0, 0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 8, 9, 8, 9, 6];
    tileMap[8] = [9, 9, 9, 8, 9, 0, 0, 0, 0, 0, 0, 0, 8, 10, 0, 10, 0, 6];
    tileMap[9] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3];
    tileMap[10] = [13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14];
// store tile index numbers in the tileMap array

    for (mapNo=0; mapNo < 11; mapNo++){ //iterate throufh each map row
        yt+=64; //add 64 to yt for every iteration of the for loop
        for (xt=0; xt < tileMap[mapNo].length*64; xt+=64){ //iterate through each map 64 pixel wide column
            if (xt > 1152){ xt = 0; } //if at the end of the row start another
            var i = tileMap[mapNo][xt/64]; //set the variable i to old each tile reference
            ctx.drawImage(tile[i], xt, yt); //draw the tiles spaced 64 pixels apart
        } //close column for loop
    } // close row for loop
} //close drawmap function