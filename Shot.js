export class Shot {
    constructor(x,y, context)
    {
        this.shot_ball = {
            "y": y,
            "x": x,
            "width": 10,
            "height": 10
        }
        
        this.context = context;

        context.fillStyle = "#FF0000";
        context.fillRect(x, y, 10, 10);

    }
    shotgun()
    {
        this.shot_ball.y -= 12
        this.context.fillStyle = "#FF0000";
        this.context.fillRect(this.shot_ball.x, this.shot_ball.y, this.shot_ball.width, this.shot_ball.height);
    }
    explosion(x,y){

        this.context.beginPath();
        this.context.fillStyle = "#FF0000";
        this.context.arc(this.shot_ball.x, this.shot_ball.y, 20, 0, 2 * Math.PI);
        this.context.fill();
        this.context.end
    }
    check_collide(objet)
    {
        if (
            this.shot_ball.x < objet.x + objet.width &&
            this.shot_ball.x + this.shot_ball.width > objet.x &&
            this.shot_ball.y < objet.y + objet.height &&
            this.shot_ball.y + this.shot_ball.height > objet.y
        )
        {
            this.explosion();
            return true;
        }

        else if (this.shot_ball.y < 5)
        {
            return "lost";
        }
        return false;
    }


}