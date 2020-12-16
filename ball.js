class ball {
    constructor(x, y) {
      var options = {
          
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.9
      }
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 40;
      this.height = 40;
      

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      strokeWeight(3);
      stroke("white")
      ellipse (0,0,this.width,this.height);
           pop();
    }
  };
  