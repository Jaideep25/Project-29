class Polygon {
  constructor(x,y,sides,radius){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
    this.olygon = Bodies.polygon(x,y,sides,radius,options);
    this.side = sides;
    this.radius = radius;
    World.add(world,this.olygon);
  }
  /*display(){
    push();
      translate(this.polygon.position.x, this.polygon.position.y);
      imageMode(CENTER);
      image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    pop();
  }*/
  display(){
    //var angle = this.body.angle;
    push();
    translate(this.olygon.position.x, this.olygon.position.y);
    fill("yellow");
    //rotate(angle);
    imageMode(CENTER);
    image(this.image,this.olygon.position.x,this.olygon.position.y,6,30);
    pop();
  }
}
