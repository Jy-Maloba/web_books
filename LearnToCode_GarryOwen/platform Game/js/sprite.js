/* ============================
SPRITES KEY:
100 - Press 's'
101 - Press 's' flash
102 - Instructions
103 - Title - Sorcerers Mountain
104 - Instruction Message
105 - Controls
106 - Copyright Message
107 - Get ready text
108 - Get ready text flash
109 - Game Over text
============================== */
var sprite = [];
for(i = 100; i < 110; i++){
    sprite[i] = new Image();
    sprite[i].src = `sprites/${i}.png`;
}