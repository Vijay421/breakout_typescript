import GameObject from "../GameObject";
import Particle from "../animate/Particle";

export default class Paddle extends GameObject{

    private keys:boolean[] = [];
    private endPoint:number;
    private speed:number;
    private _particles:Particle[] = [];
    private _life:number = 1;

    public constructor({game, tag='paddle', x, y, speed, width=200, height=25, color='red'}:any){
        super();
        this.game = game;
        this.tag = tag;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;

        if(!x)
            this.x = this.game.screen.width  / 2 - (this.width / 2);
        if(!y)
            this.y = 450;
        if(!speed)
            this.speed = 3.2;

        this.endPoint = this.x;

        document.addEventListener('keydown', event => {
            this.keys[event.which] = true;
        });
        document.addEventListener('keyup', event => {
            this.keys[event.which] = false;
        });
    }

    public update():void{
        this.draw();
        switch( true ){
            case this.keys[65] || this.keys[37]:
                if( this.endPoint > 0 )
                    this.endPoint-= this.speed;
                break;

            case this.keys[68] || this.keys[39]:
                if( this.endPoint + this.width < this.game.screen.width )
                    this.endPoint+= this.speed;
                break;
        }

        let toTravel:number = ( this.endPoint - this.x ) < 0 ? -( this.endPoint - this.x ):( this.endPoint - this.x );
        if( toTravel > 0.1 ){
            let speedCalc:number = ( this.endPoint - this.x ) / 50;
            this.x+= speedCalc;
        }
    }

    public takeDamage(damage:number){
        this._life-= damage;
        if(this._life <= 0){
            Particle.createParticleCluster(50, this);
            this.game.removeGameObject(this);
        }
    }

    public draw():void{
        this.game.ctx.globalAlpha=1;
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.x, this.y, this.width, this.height);
        this.game.ctx.fillStyle = this.color;
        this.game.ctx.fill();

        // show endpoint
        // this.game.ctx.beginPath();
        // this.game.ctx.rect(this.endPoint, this.y, this.height, this.height);
        // this.game.ctx.fillStyle = 'red';
        // this.game.ctx.fill();

        for( let particle of this._particles){
            if(!!particle)
                particle.draw();
        }
    }
}