var database;
var gameState = 0;
var playerCount;
var game, form, player;

var car1, car2, car3, car4;
var cars;
var allPlayers;


function setup(){
    createCanvas(400,400);
    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    
}

