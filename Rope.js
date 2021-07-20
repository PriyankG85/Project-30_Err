class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY) {

        this.x = offsetX;
        this.y = offsetY;
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x: this.x, y: 0}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {
        var sp = this.rope.bodyA.position;
        var ep = this.rope.bodyB.position;
        strokeWeight(3);
        line(sp.x+this.x, sp.y+this.y, ep.x, ep.y);
    }
}