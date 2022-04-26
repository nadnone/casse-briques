import {gameloop } from "./gameloop.js";

let game_canva = document.querySelector("#game_canva")
let context = game_canva.getContext("2d");

const C_HEIGHT = 480;
const C_WIDTH = 640;
const P_SPEED = 50;

const C_CENTER = {
    "x": C_WIDTH/2,
    "y": C_HEIGHT/2
}

let list_invaders = []
let list_shots = []

let player_pos = {
    "x": C_CENTER.x,
    "y": C_CENTER.y * 2 - 30
}

function drawPlayer(){
  
   
    context.fillStyle = "#FFFFFF";
    context.fillRect(player_pos.x, player_pos.y, 20, 20);
}

function init_blocks(){
    for (let i = 0; i < 78; i++) {
           
        context.fillStyle = "#00FF00";
        context.fillRect(i * 8, i % 4 * 30, 20, 20);
        list_invaders.push({
            "x": i * 8,
            "y": i % 4 * 30,
            "height": 20,
            "width": 20
        });

    }
}


function init_game()
{
  
    drawPlayer();
    init_blocks();

    setInterval(() => {
        gameloop();
    }, 60);
}

export { init_game, drawPlayer, 
    C_CENTER, C_WIDTH, C_HEIGHT, P_SPEED,
    context, player_pos,
    list_invaders, list_shots
 }