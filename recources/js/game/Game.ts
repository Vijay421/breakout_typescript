import GameObject from "./GameObject";
import Paddle from "./models/Paddle";
import Block from "./models/Block";
import Ball from "./models/Ball";
import Particle from "./animate/Particle";

export default class Game{

    private _gameObjects:GameObject[] = [];
    private _animateObject:any[] = [];
    private _gameClasses:any[] = [];

    public constructor(private _screen:any, private _ctx:any){
        this._gameClasses.push({paddle:Paddle});
        this._gameClasses.push({block:Block});
        this._gameClasses.push({ball:Ball});
        this.populate();
        console.log(this);
        for( let obj of this._gameObjects){
            console.log(obj);
        }
    }

    public start():void{
        setInterval(() => {
            this._ctx.clearRect(0, 0, this._screen.width, this._screen.height);

            for( let index in this._gameObjects ){
                this._gameObjects[index].update();
            }
            for( let index in this._animateObject ){
                this._animateObject[index].update();
            }
        });
    }

    private populate():void{
        this.addGameObject('paddle', {game:this, color:'blue'});
        this.addGameObject('ball', {game:this, color:'lightgreen'})
        for( let i=0;i<3;i++ ){
            for( let j=0;j<5;j++ ){
                this.addGameObject('block', {game:this, x:j * ( 100 + 30 ) + 25, y:( 10 + 50 ) * i});
            }
        }
    }

    private addGameObject(name:string, param:any){
        let className;
        for( let objectClass of this._gameClasses){
            className = objectClass[name];
            if(!!className){
                this._gameObjects.push(new className(param));
                break;
            }
        }
    }

    public removeGameObject(obj:GameObject){
        for( let index in this._gameObjects){
            if(this._gameObjects[index] === obj){
                delete this._gameObjects[index];
                break;
            }
        }
    }

    public addAnimateObject(param:any){
        this._animateObject.push(new Particle(param));
    }

    public removeAnimateObject(particle:Particle){
        for( let index in this._animateObject){
            if(this._animateObject[index] === particle){
                delete this._animateObject[index];
                break;
            }
        }
    }

    public get screen():any{ return this._screen; }

    public get ctx():any{ return this._ctx; }

    public get gameObjects():any{ return this._gameObjects; }
}