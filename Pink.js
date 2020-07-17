class Pink {
  constructor(x,y,width,height){
      var options={
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
     // fill("red");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
  }
  display(){
      var p = this.body.position;
      push();
      rectMode(CENTER);
      fill("pink");
      rect(p.x,p.y,this.width,this.height);
      pop();
  }
};
