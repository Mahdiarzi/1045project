class ChessPiece{
    constructor(x,y,color, isClicked=false, isKing=false){
        this.x = x;
        this.y = y;
        this.color = color;
        this.isClicked = isClicked;
        this.isKing = isKing;
    }
    getColor(){
        return this.color;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
}