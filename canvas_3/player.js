export  class Player{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.vy = 0;
        this.weight = 1;
        //this.image = document.getElementById("player");
        this.image = player;
        this.sx = 0;
        this.sy = 0;
        this.speed = 0;
        this.maxSpeed = 10;
        

    }
    update(input){
        // Horizontal Movement
        this.x += this.speed;
        if (input.includes('ArrowRight')){
            this.speed = this.maxSpeed;
        }else if (input.includes('ArrowLeft')){
            this.speed = -this.maxSpeed;
        }else{
            this.speed = 0;
        }
        if (this.x<0) this.x = 0;
        if (this.x>this.game.width - this.width) this.x = this.game.width - this.width;
        // Vertical Movement
        if (input.includes('ArrowUp')&& this.onGround()) this.vy -=20;
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.weight;
        else this.vy = 0;

        
    }
    onGround(){
        return this.y >=this.game.height - this.height;
    }
    draw(context){
        /*
        context.fill = 'white';
        context.drawRect(this.x,this.y,this.width,this.height);
        context.fill = 'none';
        */
        context.drawImage(this.image,this.sx,this.sy,this.width,this.height,this.x,this.y,this.width,this.height);

    }

}