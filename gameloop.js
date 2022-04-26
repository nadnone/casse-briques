import { P_SPEED, context, C_WIDTH, C_HEIGHT, drawPlayer, list_invaders, list_shots, player_pos, C_CENTER } from "./init.js";
import { x_velocity } from "./main.js";


function draw_blocks(){

    for (let i = 0; i < list_invaders.length; i++) {
        const invader = list_invaders[i];
        
      
        context.fillStyle = "#00FF00";

        context.fillRect(invader.x, invader.y, invader.height, invader.width);    
    }

}

function drawScore()
{
    context.beginPath();
    context.fillStyle = "#FFFFFF";
    context.font = "18px Arial"
    context.fillText(`Bullets: ${list_shots.length} | Ennemies: ${list_invaders.length}`, C_CENTER.x * 2 - 250, C_CENTER.y * 2 - 20);
    context.fill();
}


function shots()
{
    for (let i = 0; i < list_shots.length; i++) {
        const shot = list_shots[i];
        shot.shotgun();

        for (let x = 0; x < list_invaders.length; x++) {
            const invader = list_invaders[x];

            switch(shot.check_collide(invader))
            {
                case true:
                    list_invaders.splice(x, 1);
                    list_shots.splice(i, 1);
                    return;

                case "lost":
                    list_shots.splice(i, 1);
                    return;
            }


        }
    }
}

let A_time = Date.now();
let B_time = Date.now();
let time = 0;
function gameloop()
{

    A_time = Date.now();
    time = (A_time - B_time) / 1000;
    

    context.clearRect(0,0, C_WIDTH, C_HEIGHT);

    draw_blocks();
    drawPlayer();

    shots();

    drawScore();

    // event move
    player_pos.x += x_velocity * P_SPEED * time;

    if (player_pos.x > 640){
        player_pos.x = 630;
    } 
    if (player_pos.x < 0) { 
        player_pos.x = 10;
    }

    B_time = Date.now();

}


export { gameloop, time }