class Player {

    constructor(){
        this.spot = 0;
    }

    roll(){
        let r=floor(random(1,4));
        this.spot += r;
        let tile = tiles[this.spot];
        if(tile){
            this.spot+= tile.snakeorladder;
        }
    }

    reset(){
        this.spot = -1;
    }

    show(tiles){
        let current = tiles[this.spot];
        console.log(tiles[this.spot]);
        fill(255);
        let center= current.getCenter();
        ellipse(center[0],center[1],32);
    
    }
}