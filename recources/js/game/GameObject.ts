import Game from "./Game";

export default abstract class GameObject{

    private _color:string;
    private _x:number;
    private _y:number;
    private _width:number;
    private _height:number;
    private _tag:string;
    private _game:any;

    public abstract update():void;
    public abstract draw():void;

    public isCollide(obj:GameObject):boolean{
        return(
            obj.x + obj.width >= this.x && obj.x <= this.x
            &&
            obj.y + obj.height >= this.y && obj.y <= this.y
        );
    }

    public get width(): number { return this._width; }
    public set width(value: number) { this._width = value; }

    public get height(): number { return this._height; }
    public set height(value: number) { this._height = value; }

    public get x():number{ return this._x; }
    public set x(x:number){ this._x = x; }

    public set y(y:number){ this._y = y; }
    public get y():number{ return this._y; }

    public get tag():string{ return this._tag; }
    public set tag(tag:string){ this._tag = tag; }

    public set color(color:string){ this._color = color; }
    public get color():string{ return this._color; }

    public set game(game:Game){ this._game = game; }
    public get game():Game{ return this._game; }
}