class Ball{
    constructor(x, y, w, h)
{
    var options={
        restitution:0.8
    }
    this.body=Bodies.rectangle(x, y, w, h, options)
    World.add(world,this.body)
}
show(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(RADIUS)
    ellipse(0,0, this.w, this.h)
    pop()
}
}
