class String{
    constructor(A,b){
        var string={
            length:80,
            stiffness:0.5,
            bodyA:A ,
            bodyB:b 
        }
        this.chain=Matter.Constraint.create(string);
        World.add(world,this.chain);
    }
    display(){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y,)
    }
}