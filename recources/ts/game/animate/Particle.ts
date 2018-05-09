import Game from "../Game";
import GameObject from "../GameObject";

export default class Particle{

    private _game:Game;
    private _startPos:any = {x:undefined,y:undefined};
    private _endPos:any = {x:undefined,y:undefined};
    private _color:string;
    private _width:number;
    private _height:number;
    private _speed:number;
    private _x:number;
    private _y:number;
    private _xSwerve:number;
    private _ySwerve:number;
    private _alpha:number = 1;
    private _teller:number =0;
    private _caller:any;

    public constructor({game, startPos, endPos, speed, color, width, height, caller}:any){
        this._startPos = startPos;
        this._endPos = endPos;
        this._color = color;
        this._width = width;
        this._height = height;
        this._game = game;
        this._speed = speed;
        this._x = this.startPos.x;
        this._y = this.startPos.y;
        this._caller = caller;
        this._xSwerve = Math.floor((Math.random() * 5) + 1) / 100;
        this._ySwerve = Math.floor((Math.random() * 5) + 1) / 100;
    }

    public update(){
        this.draw();
        let xSpeed:number = this.lerp(this._endPos.x, this._x);
        if(!!xSpeed)
            this._x+= xSpeed + this._xSwerve;

        let ySpeed:number = this.lerp(this._endPos.y, this._y);
        if(!!ySpeed)
            this._y-= ySpeed + this._ySwerve;

        if(this._teller % 6 === 0)
            this._alpha-= 0.01;

        if(this._alpha <= 0)
            this._game.removeAnimateObject(this);

        this._teller++;
    }

    public static createParticleCluster(size:number, caller:GameObject, speed:number = 1000000000):void{
        let particleSize:number = Math.sqrt(size);
        for(let x=0; caller.width - x > 0 ;x+=particleSize){
            for(let y=0; caller.height - y > 0; y+=particleSize){
                let param:any = {game:caller.game, startPos:{x:caller.x + x, y:caller.y + y}, speed, endPos:{x:caller.x + x+50, y:caller.y + y+50,} ,color:caller.color, width:particleSize, height:particleSize, caller:caller};
                caller.game.addAnimateObject(param);
            }
        }
    }

    public lerp(endPoint:number, pos:number):number{
        let toTravel:number = ( endPoint - pos ) < 0 ? -( endPoint - pos ):( endPoint - pos );
        if( toTravel > 0.1 ){
            return ( endPoint - pos ) / this._speed;
        }
        return ;
    }

    public draw(){
        this._game.ctx.globalAlpha=this._alpha;
        this._game.ctx.beginPath();
        this._game.ctx.rect( this._x , this._y, this._width, this._height);
        // this._game.ctx.moveTo(75/2.5 +this._x,50/2.5+this._y);
        // this._game.ctx.lineTo(100/2.5+this._x,50/2.5+this._y);
        // this._game.ctx.lineTo(87/2.5+this._x,25/2.5+this._y);
        this._game.ctx.fillStyle = this.color;
        this._game.ctx.fill();
    }

    get startPos(): any { return this._startPos; }
    set startPos(value: any) { this._startPos = value; }

    get endPos(): any { return this._endPos; }
    set endPos(value: any) { this._endPos = value; }

    get color(): string { return this._color; }
    set color(value: string) { this._color = value; }

    get width(): number { return this._width; }
    set width(value: number) { this._width = value; }

    get height(): number { return this._height;}
    set height(value: number) { this._height = value; }
}