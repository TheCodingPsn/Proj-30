class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){

      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);

      if(this.body.speed < 10) {
     
        
      } else{
        //Removed it from the world
  World.remove(world,this.body)
 
  push()

  this.Visiblity = this.Visiblity - 5

  tint(225, this.Visiblity);

  pop()
      } 
    } 
  }
