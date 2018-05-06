import Game from './game/Game';

window.onload = () => {
    const screen:any = document.querySelector('#screen');
    const ctx:any = screen.getContext("2d");

    const game:Game = new Game(screen , ctx);
    game.start();
};