class Polygonclass{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        this.image=loadImage("polygon.png")
        World.add(world, this.body);
       
      }
      display(){
        
        
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();;
         
         
         // rectMode(CENTER);
       // rect(pos.x,pos.y,this.width, this.height);
        }
      }
    