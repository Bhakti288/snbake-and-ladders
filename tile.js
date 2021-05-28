class Tile {

    constructor(x,y,wh,next,index,snakeorladder){

        this.x = x;
        this.y = y;
        this.wh = wh;
        this.next = next;
        this.index = index;
        this.snakeorladder = 0;
        if(this.index%2===0){
            this.color = 255;
        } else {
            this.color = 50;
        }
    }

    getCenter(){
        let cx = this.x + this.wh/2;
        let cy = this.y + this.wh/2;
        return[cx,cy];
    }

    show(){
        fill(this.color);
        rect(this.x,this.y,this.wh,this.wh);
    }

    Snakeorladders(){
       if(this.snakeorladder!==0){
        myCenter = this.getCenter();
        nextCenter = tiles[this.index + this.snakeorladder].getCenter();
        strokeWeight(4);
        if(this.snakeorladder<0){
            stroke(255);
        }else {
            stroke(0);
        }
        line(myCenter[0],nexrtCenter[0],mycenter[1],nextCenter[1]);
       }
    }
    
}