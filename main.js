import { init_game, player_pos, context, list_shots } from "./init.js";
import "./gameloop.js";
import {Shot} from "./Shot.js";

let x_velocity = 0;

let shooting = false;
let timeshoot = 0;

let a_time = 0;

addEventListener("keypress", (event) => {


    if (event.key === "a" || event.key === "A")
    {
        x_velocity-=4;
    }
    else if (event.key === "D" || event.key === "d")
    {
        x_velocity+=4;
    }
    if (event.key === " ")
    {

        if (!shooting)
        {
            a_time = Date.now();
            shooting = true;
            let p = new Shot(player_pos.x, player_pos.y, context);
            list_shots.push(p);
        }


        timeshoot += Date.now() - a_time;
        console.log(timeshoot);
        if (timeshoot > 200) shooting = false; timeshoot = 0;

    }

    if (x_velocity > 5) x_velocity = 5;
    if (x_velocity < -5) x_velocity = -5;

    if (player_pos.x > 640 || player_pos.x < 0) x_velocity = 0;

});

init_game();


export { x_velocity }
