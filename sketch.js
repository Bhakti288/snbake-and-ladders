let tiles=[];
let player;
let rolls = [];
let index = 0;
let averageRolls = 0;
let avgP;

function setup(){
    createCanvas(400,400);
     
    avgP=createP('');
    rolls[index] = 0;

    let resolution = 40;
    let cols = width/resolution;
    let row = height/resolution;
    x = 0;
    y = (row-1)*resolution;
    
    let dir = 1;

    player = new Player();

    for(i = 0;i <cols*row;i++){
    let  tile = new Tile(x,y,resolution,i,i+1);
    tiles.push(tile);
    x = x + (resolution * dir);
    if(player.spot >= width || player.spot<= -resolution){
        dir*=-1;
        x += resolution * dir;
        y -= resolution;
    }
    }

    for(i=0;i<3;i++){
        let index = floor(random(cols,tiles.length));
        tiles[index].snakeorladder=1* floor(random(index%cols,index-1));
    }
    for(i=0;i<3;i++){
        let index = floor(random(0,tiles.length-cols));
        tiles[index].snakeorladder= floor(random(cols-(index%cols),tiles.length -index-1));
    }

    

}

function draw (){
    
    background(51);

    for(let tile of tiles){
        tile.show();
    }

    player.roll();
    rolls[index]++;
     
    let gameOver = false;
    if(player.spot>= tiles.length - 1){
        player.spot = tiles.length - 1
        gameOver = true;
    }
    player.show(tiles);

    if(gameOver){
     player.reset();
     index++;
     rolls[index]=0;
    }

    let sum = 0;
    for(i=0;i>= rolls.length-1;i++){
        sum+= rolls[i];
    }

    let avg = sum / (rolls.length - 1);
    avgP.html(avg);

   
}