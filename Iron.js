class Iron {

constructor(x,y){

    var options={
        
        'restitution':0.4,
        'friction':3,
        'denssity':30
    }
 this.body=Bodies.rectangle(x,y,50,50,options)
 this.width=100;
 this.height=40;

World.add(world,this.body)

}

display(){

var pos=this.body.position;
push()
translate(pos.x,pos.y)
rectMode(CENTER)
fill("grey")
rect(0,0,this.width,this.height)
pop()



}




}