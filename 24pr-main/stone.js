class Stone {
    constructor(x,y,width,height) {
      var options = {
          'restitution':1.5,
          'friction':5,
          'density':7
      }
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };