class Paper {
    constructor(x,y,diameter){
     var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body= Matter.Bodies.circle(x,y,diameter,options)
    this.diameter=diameter
    World.add(world,this.body)
}
    display(){
        var p =this.body.position;
        p.x=mouseX;
        p.y=mouseY
        circle(p.x, p.y, this.diameter)
    }
}
