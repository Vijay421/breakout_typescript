import GameObject from "../GameObject";
import Particle from "../animate/Particle";

export default class Block extends GameObject{

    private _life:number = 1;
    private _endPoint:number;

    public constructor({game, tag='block', x, y, width=125, height=50, color='red'}:any){
        super();
        this.game = game;
        this.tag = tag;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this._endPoint = this.y - 5;
    }

    public update():void{
        this.draw();
    }

    public draw():void{
        this.game.ctx.globalAlpha=1;
        this.game.ctx.beginPath();
        this.game.ctx.rect( this.x , this.y, this.width,  this.height );
        this.game.ctx.fillStyle = this.color;
        this.game.ctx.fill();
    }

    public takeDamage(damage:number){
        this._life-= damage;
        if(this._life <= 0){
            Particle.createParticleCluster(75, this);
            this.game.removeGameObject(this);
        }
    }
}