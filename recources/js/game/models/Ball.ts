import GameObject from "../GameObject";
import Particle from "../animate/Particle";

export default class Ball extends GameObject{

    private _raduis:number;
    private _direction:string = 'down';
    private _turnX:number = 0;
    private _turnY:number = -3;
    private _speed:number = 0.7;

    constructor({game, tag='default', x, y, speed, color='red', raduis=10}:any){
        super();
        this.game = game;
        this.tag = tag;
        this.x = x;
        this.y = y;
        this.width = raduis;
        this.height = raduis;
        this.color = color;
        this._raduis = raduis;

        if(!x)
            this.x = this.game.screen.width  / 2 - (this._raduis / 2);
        if(!y)
            this.y = 255;
    }

    public update():void{
        this.draw();
        this.move();

        if( this.y <= 0 )
            this._direction = 'down';

        if( this.y >= this.game.screen.height ){
            this._direction = 'up';
            for( let index in this.game.gameObjects){
                if(this.game.gameObjects[index].tag === 'paddle'){
                    Particle.createParticleCluster(this._raduis, this);
                    this.game.gameObjects[index].takeDamage(1);
                    this.game.removeGameObject(this);
                }
            }
        }

        if( this.x <= 0 )
            this._turnX+= 0.3;

        if( this.x >= this.game.screen.width )
            this._turnX-= 0.3;

        for( let gameObject of this.game.gameObjects){

            let collideCheck:boolean;
            try{
                collideCheck = this.isCollide(gameObject);
            }catch(e){}
            if( gameObject !== this && collideCheck){
                let newDirection:string = ( this._direction === 'down' )? 'up':'down';
                this._direction = newDirection;

                let turnAmount:number = this.turnOnCollide( gameObject );
                this._turnX = ( turnAmount / 100 ) * 1.1;
                this._turnY = ( this._turnY < 0 ) ? -0.5:0.5 ;

                if(gameObject.tag === 'block'){
                    gameObject.takeDamage(1);
                }
            }
        }
    }

    private turnOnCollide(obj:GameObject):number{
        let obj1Collide:number = obj.x + obj.width;
        let obj2Collide:number = this.x + this._raduis;

        let answer:number = ( obj.width / 2 ) - ( obj1Collide - obj2Collide );

        if( answer <= 20 && answer >= -20 ){
            return 0;
        }else{
            return answer;
        }
    }

    private move():void{
        if(this._direction === 'down'){
            this.y+= this._speed;
        }else if(this._direction === 'up'){
            this.y-= this._speed;
        }
        this.x+= this._turnX;
    }

    public draw():void{
        this.game.ctx.globalAlpha=1;
        this.game.ctx.beginPath();
        this.game.ctx.arc( this.x, this.y, this._raduis,0,2*Math.PI );
        this.game.ctx.fillStyle = this.color;
        this.game.ctx.fill();
    }
}